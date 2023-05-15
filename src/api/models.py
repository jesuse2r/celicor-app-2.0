from flask_sqlalchemy import SQLAlchemy
import enum
import datetime

db = SQLAlchemy()

class Role(enum.Enum):
   admin = "admin"
   buyer = "buyer"


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(50),nullable= False)
    document_id= db.Column(db.String(50), nullable= False, unique=True)
    phone= db.Column(db.String(50), nullable= False, unique=True)
    address= db.Column(db.String(120), nullable= False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(260), unique=False, nullable=False)    
    role = db.Column(db.Enum(Role), nullable=False , default="buyer")
    cart = db.relationship("Cart")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "document_id": self.document_id,
            "phone": self.phone,
            "address": self.address,
            "email": self.email,
        }
class Licores(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(50),nullable= False)
    category= db.Column(db.String(100), nullable=False)
    quantity= db.Column(db.Integer, nullable = False)
    types= db.Column(db.String(50),nullable= False)
    marca= db.Column(db.String(50),nullable= False)
    price= db.Column(db.String,nullable= False)
    origen= db.Column(db.String(50),nullable= False)
    litres= db.Column(db.String,nullable= False)
    style= db.Column(db.String(50),nullable= False)
    old =db.Column(db.String(50),nullable= False)

    def __repr__(self):
        return f'<Licores {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "quantity": self.quantity,
            "category": self.category,
            "types": self.types,
            "marca": self.marca,
            "price": self.price,
            "origen": self.origen,
            "litres": self.litres,
            "style": self.style,
            "old": self.old
        }
class Cartitem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    quantity= db.Column(db.Integer,nullable= False)
    licores_id = db.Column(db.Integer, db.ForeignKey('licores.id'), nullable=False)
    licores = db.relationship("Licores")

    cart_id = db.Column(db.Integer, db.ForeignKey('cart.id'), nullable=False)
    cart = db.relationship("Cart")

    def __repr__(self):
        return f'<Cartitem {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "quantity": self.quantity,
            "licores_id": self.licores_id,
            "cart_id":self.cart_id
        }

class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship("User")
    cart_item = db.relationship("Cartitem")
    def __repr__(self):
        return f'<Cart {self.id}>'
    def serialize(self):
        items=[]
        for item in self.cart_item: 
            items.append({"id":item.id, "quantity":item.quantity, "licores_id":item.licores_id, "cart_id":item.cart_id})

        return {
            "id": self.id,
            "cart_item":  items,
            "user_id": self.user_id,
        }

class Factura(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    
    fecha= db.Column(db.DateTime, default=datetime.datetime.now)
    direccion= db.Column(db.String(150), nullable= False, unique=True)
    total= db.Column(db.String(50), nullable= False, unique=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship("User")
  

    def __repr__(self):
        return f'<Factura {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "fecha": self.fecha,
            "direccion": self.direccion,
            "total": self.total,
            "user_id": self.user_id,
           
        }





