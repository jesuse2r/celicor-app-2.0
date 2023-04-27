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
    prize= db.Column(db.Integer(50),nullable= False)
    origen= db.Column(db.String(50),nullable= False)
    litres= db.Column(db.Integer(50),nullable= False)
    style= db.Column(db.String(50),nullable= False)
    old =db.Column(db.Integer(50),nullable= False)
    role = db.Column(db.Enum(Role), nullable=False, default="buyer")

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



class CartItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    quantity= db.Column(db.Integer(50),nullable= False)
    
    licores_id = db.Column(db.Integer, db.ForeignKey('licores_id'), nullable=False)
    licores = db.relationship(Licores)
    cart_id = db.Column(db.Integer, db.ForeignKey('cart_id'), nullable=False)
    cart = db.relationship(Cart)
    

    def __repr__(self):
        return f'<CartItem {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "cart_item": self.cart_item,
            "licores_id": self.licores_id

            # do not serialize the password, its a security breach
        }
class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user_id'), nullable=False)
    cart_item_id = db.Column(db.Integer, db.ForeignKey('cart_item_id'), nullable=False)
    cart_item = db.relationship(CartItem, backref="cart")

    def __repr__(self):
        return f'<Cart {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "cart_item": self.cart_item,
            "user_id": self.user_id

            # do not serialize the password, its a security breach
        }





