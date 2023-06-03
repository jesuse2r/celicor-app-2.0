"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Licores, Cart, Cartitem, Role, Factura
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from api.firebase.firebase import Bucket


api = Blueprint('api', __name__)

#register
@api.route('/user', methods=['POST'])
def register():
    body = request.json
    email = body.get('email', None)
    password = body.get('password', None)    
    name = body.get('name', None)
    address = body.get('address', None)
    document_id = body.get('document_id', None)
    phone = body.get('phone', None)   
    role = body.get ('role', None)
    if email is None or password is None or name is None or  address is None or document_id is None or phone is None:
        return{"error": "todos los campos son requeridos"}, 400    
    if role not in  Role.__members__:
        return{"error": f"{role} No existe en los roles"}, 400
    user = User.query.filter_by(email = email).one_or_none()
    if user is not None:
        return{"error": "Este correo ya esta registrado"}, 400
    password_hash = generate_password_hash(password)
    new_user = User(email=email, password=password_hash, name=name, address=address, document_id=document_id, phone=phone)
    db.session.add(new_user)
    try: 
        db.session.commit()
        return jsonify({"msg":"usuario creado con exito"}), 201
    except Exception as error:
        return{"error": error}, 500

#login
@api.route("/user/login", methods=["POST"])
def login():
    body= request.json
    email = body.get("email", None)
    password = body.get("password", None)
    if email is None or password is None:
        return {"error": "Todos los campos son requeridos"}, 400
    login_user = User.query.filter_by(email=email).first()
    if not login_user:
        return {"error": "Usuario no encontrado"}, 404
    if check_password_hash(login_user.password, password):
        token = create_access_token({"id": login_user.id})     
        print(token)
        return jsonify({"access_token": token})
    else:
        return "contraseña incorrecta", 401   

    
@api.route('/user', methods=['GET'])
def handle_hello():
    response_body = {
        "message": "hola manao"
    }
    return jsonify(response_body), 200

#traer todos los datos del carrito
@api.route("/cart", methods=['GET'])
@jwt_required()
def get_all_cart():
    id=get_jwt_identity()
    user_id= id["id"]
    cart_list = Cart.query.filter_by(user_id=user_id).first()
    # serialized_cart = [cart.serialize() for cart in cart_list]
    return jsonify({"data": cart_list.serialize()})
#agregar al carrito
@api.route("/cart/<int:id>", methods=['POST'])
def add_all_cart(id):

    body = request.json
    cart_exist = Cart.query.filter_by(user_id=id).first()
    if cart_exist:
        return {"Error": "ya existe un carrito con este nombre: "}, 400
    new_carrito = Cart(user_id=id)
    db.session.add(new_carrito)

    try:
        db.session.commit()
        return jsonify({"msg": "carrito agregado"}), 201
    except Exception as error:
        db.session.rollback()
        return jsonify ({"error": error})

#borrar del carrito
@api.route('/cartitem/<int:licores_id>/<int:cart_id>', methods=['DELETE'])
@jwt_required()
def delete_cart_licores( licores_id,cart_id):
        cartitem_delete = Cartitem.query.filter_by(cart_id=cart_id, licores_id=licores_id).first()
        print(cartitem_delete,licores_id,cart_id)
        if not cartitem_delete:
            return {"msg": "no existe un licor con este id"}, 400
        db.session.delete(cartitem_delete)
        try:
            db.session.commit()
            return jsonify({"msg":"licor elminado con exito"}), 200
        except Exception as error:
            db.session.rollback()
            return {"error": error}, 404
#agregar al cartitem
@api.route('/cartitem', methods=['POST'])
@jwt_required()
def create_cartitem():
    body = request.json
    # body_cart_id = body.get('cart_id', None)
    user = get_jwt_identity()
    cart = Cart.query.filter_by(user_id = user["id"]).first()
    if cart is None:
        cart = Cart(user_id = user["id"])
        db.session.add(cart)
    body_licores_id = body.get('licores_id', None)
    body_quantity= body.get('quantity', None)

    if cart is None or body_licores_id is None or body_quantity  is None:
        return {"error": "Todos los campos requeridos"}, 400
    cart_item_exists = Cartitem.query.filter_by(cart_id=cart.id, licores_id=body_licores_id).first()
    if cart_item_exists:
        return {"error": f"ya existe un licor con el id: {body_licores_id}"}, 400
    new_cart_item = Cartitem(cart_id=cart.id, licores_id=body_licores_id,  quantity=body_quantity)
    db.session.add(new_cart_item) 
    try:
        db.session.commit()
        return jsonify({"msg": "licor creado con exito!"}), 201
    except Exception as error:
        db.session.rollback()
        return jsonify ({"error": error}), 500 

    
#traer del cartitem
@api.route('/cartitem', methods=['GET'])
@jwt_required()
def get_all_cart_item():
    user = get_jwt_identity()
    cart = Cart.query.filter_by(user_id = user["id"]).first()
    cartitem_list = Cartitem.query.filter_by(cart_id=cart.id).all()
    list_items = []
    for cartitem in cartitem_list:
        item = cartitem.serialize()
        licor = Licores.query.get(item["licores_id"])
        item["licor"] = licor.serialize()
        list_items.append(item)
    serialized_cartitem = [cartitem.serialize() for cartitem in cartitem_list]
    print(serialized_cartitem)
    print(list_items)
    return jsonify({"data": list_items})

#editar cartitem
@api.route('/cartitem/<int:cart_id>', methods=['PUT'])
@jwt_required()
def actualizar_cantidad(cart_id):

    body = request.json
    body_quantity = body.get('quantity', None)
    body_licores_id = body.get('licores_id', None)
    cartitem = Cartitem.query.filter_by(cart_id=cart_id, licores_id=body_licores_id).first()

    if not cartitem:
        return {"mensaje" : "no existe un licor con este id"} 
    if body_quantity is not None: 
        cartitem.quantity = body_quantity
    try:
     db.session.commit()
     return "cantidad actualizada"
    except Exception as error:
        db.session.rollback()
        return {"error": error}, 500
#traer todos los licores
@api.route('/licores', methods=['GET'])
def get_all_licores():
    licores_list = Licores.query.all()
    serialized_licores = [licores.serialize() for licores in licores_list]
    return jsonify({"data": serialized_licores})
#traer licores uno por uno
@api.route('/licores/<int:id>', methods=['GET'])
def get_licores(id):

    licores = Licores.query.filter_by(id=id).one_or_none()
    if not licores:
        return {"mensaje" : "no existe un licor con este id"}    
    return jsonify({"data": licores.serialize()})
#traer categoria de licores por ejemp whisky, ron etc.
@api.route('/licores/<types>', methods=['GET'])
def get_types(types):
    licores_list = Licores.query.filter_by(types=types).all()
    serialized_licores = [licores.serialize() for licores in licores_list]
    if not licores_list:
        return {"mensaje" : "no existe un licor de este tipo"}    
    return jsonify({"data": serialized_licores})
#agregar licores

@api.route('/licores/<types>/<marca>', methods=['GET'])
def get_marca(types, marca):
    licores_list = Licores.query.filter_by(types=types,marca=marca).all()
    serialized_licores = [licores.serialize() for licores in licores_list]
    if not licores_list:
        return {"mensaje" : "no existe un licor con esa marca"}    
    return jsonify({"data": serialized_licores})

@api.route('/licores', methods=['POST'])
def create_licores():
    form = request.form
    files = request.files
    print(form)
    print(files)
    body_name = form.get('name')
    body_category = files.get('image')
    body_quantity = form.get('quantity')
    body_types = form.get('types')
    body_marca = form.get('marca')
    body_price = form.get('price')
    body_origen = form.get('origen')
    body_litres = form.get('litres')
    body_style = form.get('style')
    body_old = form.get('old')
    new_image = Bucket.upload_file(body_category, body_category.filename)
    print(new_image)
    if body_category is None or body_name is None or body_quantity is None or body_types is None or body_marca is None or body_price is None or body_origen is None or body_litres is None or body_style is None or body_old is None:
        return {"error": "Todos los campos requeridos"}, 400
    licores_exists = Licores.query.filter_by(name=body_name).first()
    if licores_exists:
        return {"error": f"ya existe un licor con el nombre: {body_name}"}, 400
    new_licores = Licores(category=new_image, name=body_name,  quantity=body_quantity, types=body_types, marca=body_marca, price=body_price, origen=body_origen, litres=body_litres, style=body_style, old=body_old )
    db.session.add(new_licores) 
    try:
        db.session.commit()
        return jsonify({"msg": "licor creado con exito!"}), 201
    except Exception as error:
        db.session.rollback()
        return jsonify ({"error": error}), 500 
#borrar licores
@api.route('/licores/<int:id>', methods=['DELETE'])
def delete_licores(id):
    
    licores = Licores.query.get(id)
    if not licores:
        return {"mensaje" : "no existe un licor con este id"}    
    db.session.delete(licores)
    try:
        db.session.commit()
        return "licor elminado con exito"
    except Exception as error:
        db.session.rollback()
        return {"error": error}, 500

#-----Modificacion de la contraseña y email ------
@api.route('/change-password', methods=["PUT"])
def change_password():
    body= request.json
    email = body.get('email', None)
    new_email = body.get('new_email', None)
    password = body.get('password', None)
    new_password = body.get ('new_password', None)
    if email is None or new_password is None or password is None or new_password is None:
        return{"error":"Todos los campos son necesarios"}
    update_user = User.query.filter_by(email=email).first()
    if not update_user:
        return {"error":"usuario no encontrado"}, 404    
    hash_password= generate_password_hash(new_password)
    update_user.password = hash_password    
    update_user.email = new_email
    try:
        db.session.commit()
        return jsonify({"msg":"cambiando contraseña y correo" }) 
    except Exception as error:    
        db.session.rollback()    
        return {"error": error}, 500  



@api.route('/factura', methods=['POST'])
@jwt_required()
def create_factura():
    body = request.json
    
 
    body_direccion = "Av Fuerzas Armadas, frente al mercado de las flores."
    body_total = body.get('total', None)
    user = get_jwt_identity()
    
    if body_direccion is None or body_total is None:
        return {"error": "Todos los campos requeridos"}, 400
    factura = Factura(user_id = user["id"],  direccion=body_direccion, total=body_total)
 
    db.session.add(factura)
    try:
        db.session.commit()
        return jsonify({"msg": "factura creado con exito!"}), 201
    except Exception as error:
            db.session.rollback()
            return jsonify ({"error": error.args}), 500 
 

@api.route("/factura/<int:id>", methods=['GET'])
@jwt_required()
def get_factura(id):
    id=get_jwt_identity()

    factura = Factura.query.filter_by(id=id).first()
    print(factura)

    return jsonify({"data": factura.serialize()})












