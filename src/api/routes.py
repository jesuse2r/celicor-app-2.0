"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Role
from flask_jwt_extended import create_access_token, jwt_required
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash


api = Blueprint('api', __name__)


@api.route('/user', methods=['POST'])
def register():
    body = request.json
    email = body.get('email', None)
    password = body.get('password', None)
    is_active = True
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

    new_user = User(email=email, password=password_hash, is_active=is_active, name=name, address=address, document_id=document_id, phone=phone, role="buyer" )
    db.session.add(new_user)
    try: 
        db.session.commit()
        return jsonify({"msg":"usuario creado con exito"})
    except Exception as error:
        return jsonify({"error": error.args[0]})

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
@jwt_required()
def handle_hello():

    response_body = {
        "message": "hola manao"
    }


    return jsonify(response_body), 200




