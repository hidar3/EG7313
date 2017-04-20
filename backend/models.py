#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    backend.models
    ~~~~~~~~~~~~~~

    This module implements the database models of this application.

    For more information on how to create models:
        - Flask-SQLAlchemy : http://flask-sqlalchemy.pocoo.org/2.1/
        - SQLAlchemy       : http://www.sqlalchemy.org/

    For more information on how to hash passwords:
        - Flask-Bcrypt : https://flask-bcrypt.readthedocs.io/en/latest/

    to create all tables in the database:
    python3 manage.py create
    to recreate:
    python3 manage.py recreate
    !!!note that recreate will drop all tables and recreate!!!

"""

from backend import db, bcrypt

from decimal import Decimal


class User(db.Model):
    """This is the first model in the database."""
    __tablename__ = 'users'

    # Fields in this model
    id       = db.Column(db.Integer, primary_key=True)
    email    = db.Column(db.String(50), nullable=False, unique=True)
    username = db.Column(db.String(30), nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)

    def __init__(self, email, username, password):
        """
        This function initializes this model. This function is necessary
        since we are hashing the user's password before storing it into 
        the database.
        """
        self.email    = email
        self.username = username
        # Protecting the user's password using a hash function
        self.password = bcrypt.generate_password_hash(password)
    
    def check_password(self, password):
        """This is a helper function for checking the user's password."""
        return bcrypt.check_password_hash(self.password, password)


class Inventory(db.Model):
    """This is the first model in the database."""
    __tablename__ = 'inventories'

    # Fields in this model
    id       = db.Column(db.Integer, primary_key=True)
    category    = db.Column(db.String(50), nullable=False)
    description    = db.Column(db.String(50), nullable=False)
    price = db.Column(db.DECIMAL(asdecimal=False),default=0.00, nullable=False) 
    quantity = db.Column(db.Integer, nullable=False)



# More models can be added here...