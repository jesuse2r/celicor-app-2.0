"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Role, Licores, Cart
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash


api = Blueprint('api', __name__)


@api.route('/user', methods=['POST'])
def register():
    body = request.json
    email = body.get('email', None)
    password = body.get('password', None)    
    name = body.get('name', None)
    address = body.get('address', None)
    document_id = body.get('document_id', None)
    phone = body.get('phone', None)
    role = body.get('role', None)
    if email is None or password is None or name is None or  address is None or document_id is None or phone is None:
        return{"error": "todos los campos son requeridos"}, 400
    if role not in  Role.__members__:
        return{"error": f"{role} No existe en los roles"}
    password_hash = generate_password_hash(password)
    new_user = User(email=email, password=password_hash, name=name, address=address, document_id=document_id, phone=phone, role="buyer" )
    db.session.add(new_user)
    try: 
        db.session.commit()
        return jsonify({"msg":"usuario creado con exito"}), 201
    except Exception as error:
        return{"error": error}, 500


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








@api.route("/user/cart/<int:id>", methods=['GET'])
def get_all_cart(id):
    cart_list = Cart.query.filter_by(user_id=id).all()
    if not cart_list:
        return {"mensaje" : "este usuario no esta en el carrito"} 
    serialized_cart = [cart.serialize() for cart in cart_list]
    return jsonify({"data": serialized_cart})

@api.route("/cart/licores/<int:id>", methods=['POST'])
def add_all_cart(id):

    
    body = request.json

    cart_id = body.get("cart_id", None)

    if not cart_id:
        return {"error": "el licor es invalido"}
    cart_exist = Cart.query.filter_by(user_id=id,cart_id=cart_id).first()

    if cart_exist:
        return {"Error": "Ya existe un licor en carrito con el nombre: "}, 400

    new_carrito = Cart(cart_id=cart_id, user_id=id)
    db.session.add(new_carrito)

    try:
        db.session.commit()
        return jsonify({"msg": "licor agregado con exito"}), 201
    except Exception as error:
        db.session.rollback()
        return jsonify ({"error": error})
        @api.route('/cart/licores/<int:licores_id>/<int:user_id>', methods=['DELETE'])
def delete_cart_licores(user_id, licores_id):
        cart_delete = Cart.query.filter_by(user_id=user_id, licores_id=licores_id).first()
        if not cart_delete:
            return {"msg": "no existe un licor con este id"}
        db.session.delete(cart_delete)
        try:
            db.session.commit()
            return "licor elminado con exito"
        except Exception as error:
            db.session.rollback()
            return {"error": error}, 500
    













@api.route('/licores', methods=['GET'])
def get_all_licores():
    licores_list = Licores.query.all()
    serialized_licores = [licores.serialize() for licores in licores_list]
    return jsonify({"data": serialized_licores})

@api.route('/licores/<int:id>', methods=['GET'])
def get_licores(id):

    licores = Licores.query.filter_by(id=id).one_or_none()
    if not licores:
        return {"mensaje" : "no existe un licor con este id"}    
    return jsonify({"data": licores.serialize()})

@api.route('/licores/<category>', methods=['GET'])
def get_category(category):
    licores_list = Licores.query.filter_by(category=category).all()
    serialized_licores = [licores.serialize() for licores in licores_list]
    if not licores_list:
        return {"mensaje" : "no existe un licor con este id"}    
    return jsonify({"data": serialized_licores})
  




@api.route('/licores', methods=['POST'])
def create_licores():
    body = request.json
    body_name = body.get('name', None)
    body_category = body.get('category', None)
    body_quantity = body.get('quantity', None)
    body_types = body.get('types', None)
    body_marca = body.get('marca', None)
    body_price = body.get('price', None)
    body_origen = body.get('origen', None)
    body_litres = body.get('litres', None)
    body_style = body.get('style', None)
    body_old = body.get('old', None)

    if body_category is None or body_name is None or body_quantity is None or body_types is None or body_marca is None or body_price is None or body_origen is None or body_litres is None or body_style is None or body_old is None:
        return {"error": "Todos los campos requeridos"}, 400
        

    licores_exists = Licores.query.filter_by(name=body_name).first()
    if licores_exists:
        return {"error": f"ya existe un licor con el nombre: {body_name}"}, 400
    new_licores = Licores(category=body_category, name=body_name,  quantity=body_quantity, types=body_types, marca=body_marca, price=body_price, origen=body_origen, litres=body_litres, style=body_style, old=body_old )
    db.session.add(new_licores) 
    try:
        db.session.commit()
        return jsonify({"msg": "licor creado con exito!"}), 201
    except Exception as error:
        db.session.rollback()
        return jsonify ({"error": error.args[0]}), 500 





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






    








