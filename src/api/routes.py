"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Licores, Cart, Cartitem, Role, Factura
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from api.firebase.firebase import Bucket
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


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






@api.route('/verify-pay', methods = ['POST'])
def verify_pay():
    if request.method == "POST":
        body = request.json
        print (body)

        sender = "jesuse2rr@gmail.com"
        receptor = "jesuse2rr@gmail.com"

       

        message = MIMEMultipart('alternatives')
        message['Subject'] = "Celicor orden-10"
        message['From'] = sender
        message['To'] = receptor

        text = ""
        style = """*  {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		@media (max-width:620px) {

			.desktop_hide table.icons-inner,
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.row-content {
				width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}
	
        }"""
        
        html = f"""<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
	
    <style>
        {style}
    </style>
</head>

<body style="background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="heading_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<h1 style="margin: 0; color: #000000; direction: ltr; font-family: Arial, Helvetica, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Supermercado La Gran Parada</span></h1>
															</td>
														</tr>
													</table>
													<table class="divider_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;"><span>&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
																	<p style="margin: 0; margin-bottom: 16px;">Hola, Jesus Rodríguez,</p>
																	<p style="margin: 0;">Gracias por tu pedido de&nbsp;Licores&nbsp;Mundiales. Realiza o confirma el pago respondiendo a este correo. El equipo de despacho te llamará para coordinar el delivery o pick-up después de verificar el pago.</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
																	<p style="margin: 0;">Ventas al mayor</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
																	<p style="margin: 0; margin-bottom: 16px;">Metodo de pago:</p>
																	<p style="margin: 0; margin-bottom: 16px;">{body["metodoDePago"]}</p>
																	<p style="margin: 0;">&nbsp;</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="divider_block block-6" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;"><span>&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-7" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
																	<p style="margin: 0; margin-bottom: 16px;">Metodo de envio:</p>
																	<p style="margin: 0; margin-bottom: 16px;">{body["metodoDeEnvio"]}</p>
																	<p style="margin: 0;">&nbsp;</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="divider_block block-8" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;"><span>&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-9" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
																	<p style="margin: 0; margin-bottom: 16px;">Direccion:</p>
																	<p style="margin: 0;">user_address</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="divider_block block-10" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;"><span>&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-11" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
																	<p style="margin: 0; margin-bottom: 16px;">Tipo de Persona:</p>
																	<p style="margin: 0; margin-bottom: 16px;">{body["TipoDePersona"]}</p>
																	<p style="margin: 0;">&nbsp;</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="divider_block block-12" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;"><span>&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-13" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
																	<p style="margin: 0; margin-bottom: 16px;">Monto:</p>
																	<p style="margin: 0; margin-bottom: 16px;">43843843043</p>
																	<p style="margin: 0;">&nbsp;</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="divider_block block-14" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;"><span>&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table class="social_block block-15" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table class="social-table" width="144px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
																		<tr>
																			<td style="padding:0 2px 0 2px;"><a href="https://www.facebook.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/facebook@2x.png" width="32" height="32" alt="Facebook" title="facebook" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 2px 0 2px;"><a href="https://www.twitter.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/twitter@2x.png" width="32" height="32" alt="Twitter" title="twitter" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 2px 0 2px;"><a href="https://www.linkedin.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/linkedin@2x.png" width="32" height="32" alt="Linkedin" title="linkedin" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 2px 0 2px;"><a href="https://www.instagram.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/instagram@2x.png" width="32" height="32" alt="Instagram" title="instagram" style="display: block; height: auto; border: 0;"></a></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table class="divider_block block-16" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;"><span>&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table class="image_block block-17" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center" style="line-height:10px"><img src="https://media3.giphy.com/media/Wt3vxo5LvwAT2dzV4I/giphy.gif?cid=20eb4e9dmt587uwvjyqj1evxalkpes7gik00srwt9q5jhi5b&ep=v1_stickers_search&rid=giphy.gif&ct=s" style="display: block; height: auto; border: 0; width: 150px; max-width: 100%;" width="150" alt="Image" title="Image"></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
																<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	<tr>
																		<td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
																			<!--[if !vml]><!-->
																			<table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation"><!--<![endif]-->
																				<tr>
																					<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="https://www.designedwithbee.com/?utm_source=editor&utm_medium=bee_pro&utm_campaign=free_footer_link" target="_blank" style="text-decoration: none;"><img class="icon" alt="Designed with BEE" src="https://d1oco4z2z1fhwp.cloudfront.net/assets/bee.png" height="32" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
																					<td style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/?utm_source=editor&utm_medium=bee_pro&utm_campaign=free_footer_link" target="_blank" style="color: #9d9d9d; text-decoration: none;">Designed with BEE</a></td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>"""
        
        message.attach(MIMEText(text,'plain'))
        message.attach(MIMEText(html,'html'))

        try:
            server = smtplib.SMTP("smtp.gmail.com",587)
            server.starttls()
            server.login("jesuse2rr@gmail.com","uydwgtdbbcfhuszr")
            server.sendmail("jesuse2rr@gmail.com","jesuse2rr@gmail.com",message.as_string())
            server.quit()
            print("Email send")
            return jsonify({"message": "Email send succesfull"}),200
        except Exception as error:
            print(error)
            print("Email not sending, error")
            return jsonify({"message":"Error, try again, later"}),500













