from model.user import User


class InMemoryDB:
    users = [User('Tal', 'Bar-El')]
    graph = {'1': [], '2': []}
    token = ""
