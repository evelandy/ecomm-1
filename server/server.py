from flask import Flask, request, make_response, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from functools import wraps
from time import sleep
import datetime
import sqlite3
import jwt

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SECRET_KEY'] = 'MainSecretKey'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
CORS(app)


##class User(db.Model):
##    id = db.Column(db.Integer, primary_key=True)
##    fname = db.Column(db.String(80))
##    lname = db.Column(db.String(80))
##    username = db.Column(db.String(80))
##    password = db.Column(db.String(120))
##    email = db.Column(db.String(120))


class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer, unique=True)
    item_name = db.Column(db.String(80))
    item_description = db.Column(db.String(120))
    item_price = db.Column(db.Integer)
    quantity = db.Column(db.Integer)
##    user_id = db.Column(db.Integer)


class BuildInv(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer)
    item_name = db.Column(db.String(80))
    item_description = db.Column(db.String(120))
    item_price = db.Column(db.Integer)


class PartInv(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer)
    item_name = db.Column(db.String(80))
    item_description = db.Column(db.String(120))
    item_price = db.Column(db.Integer)


class ServiceInv(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer)
    item_name = db.Column(db.String(80))
    item_description = db.Column(db.String(120))
    item_price = db.Column(db.Integer)


@app.route('/api/v1/check', methods=['GET'])
def server_check():
    return jsonify({'message': 'up and running'}), 200


@app.route('/api/v1/cart', methods=['GET'])
def view_cart():
    cart_list = Cart.query.all()
    if len(cart_list) == 0:
        return jsonify({'message': 'Cart is empty'})
    else:
        output = []
        for item in cart_list:
            cart_data = {}
            cart_data['id'] = item.id
            cart_data['item_id'] = item.item_id
            cart_data['item_name'] = item.item_name
            cart_data['item_description'] = item.item_description
            cart_data['item_price'] = item.item_price
            cart_data['quantity'] = item.quantity
            output.append(cart_data)
        return jsonify({'message': output}), 200


@app.route('/api/v1/cart', methods=['POST'])
def add_cart():
    data = request.get_json()
    add_item = Cart(item_id=data['item_id'], item_name=data['item_name'], item_description=data['item_description'],
                    item_price=data['item_price'], quantity=data['quantity'])
    db.session.add(add_item)
    db.session.commit()
    return jsonify({'message': 'item added'}), 201


if __name__ == "__main__":
    app.run(debug=True)
