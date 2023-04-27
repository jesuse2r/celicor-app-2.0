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


