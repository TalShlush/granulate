import json

from flask import Flask, request, Response
from flask_cors import CORS

from dao import graphDao, userDao
from model.graph_node import GraphEncoder
from service.auth_service import AuthService


app = Flask(__name__)
CORS(app)

authService = AuthService()


@app.post('/login')
def login():
    body = request.get_json()
    username = body['username']
    password = body['password']
    # TODO error handling
    user = userDao.find_user_by_name_and_password(username=username, password=password)

    response = Response(json.dumps({"token": authService.create_token(username, password)}),
                        status=200,
                        mimetype="application/json")
    response.set_cookie('username', user.username)

    return response


@app.post('/logout')
def logout():
    response = Response(status=204)
    response.set_cookie('username', expires=0)
    return response


@app.get('/graph/<graph_id>')
def get_graph(graph_id):
    if authService.handle_auth(request.headers):
        response_body = GraphEncoder().encode(graphDao.get_graphs(graph_id))
        return Response(response_body, mimetype="application/json", status=200)
    else:
        return Response({"error": "Not Authorized"}, status=401)
