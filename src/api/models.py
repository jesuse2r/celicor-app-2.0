from flask_sqlalchemy import SQLAlchemy
import enum

db = SQLAlchemy()

class Role(enum.Enum):
    admin="admin"
    buyer="buyer"

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(50),nullable= False)
    document_id= db.Column(db.String(50), nullable= False, unique=True)
    phone= db.Column(db.String(50), nullable= False, unique=True)
    address= db.Column(db.String(120), nullable= False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(260), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    role = db.Column(db.Enum(Role), nullable=False, default="buyer")

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

            # do not serialize the password, its a security breach
        }

class Licores(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(50),nullable= False)
    quantity= db.Column(db.Integer, nullable = False)
    types= db.Column(db.String(50),nullable= False)
    marca= db.Column(db.String(50),nullable= False)
    price= db.Column(db.Integer,nullable= False)
    origen= db.Column(db.String(50),nullable= False)
    litres= db.Column(db.Integer,nullable= False)
    style= db.Column(db.String(50),nullable= False)
    old =db.Column(db.Integer,nullable= False)
  

    def __repr__(self):
        return f'<Licores {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "quantity": self.quantity,
            "types": self.types,
            "marca": self.marca,
            "prize": self.prize,
            "origen": self.origen,
            "litres": self.litres,
            "style": self.style,
            "old": self.old,

            # do not serialize the password, its a security breach
        }

class Cartitem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(50),nullable= False)
    quantity= db.Column(db.Integer,nullable= False)
    
    licores_id = db.Column(db.Integer, db.ForeignKey('licores.id'), nullable=False)
    licores = db.relationship("Licores", backref="cartitem")
    

    def __repr__(self):
        return f'<Cartitem {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "licores_id": self.licores_id

            # do not serialize the password, its a security breach
        }
class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship("User", backref="cart")
    cart_item_id = db.Column(db.Integer, db.ForeignKey('cartitem.id'), nullable=False)
    cart_item = db.relationship("Cartitem", backref="cart")

    

    def __repr__(self):
        return f'<Cart {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "cart_item_id": self.cart_item_id,
            "user_id": self.user_id

            # do not serialize the password, its a security breach
        }






