from json import JSONEncoder


class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password

    def __hash__(self):
        return hash((self.username, self.password))

    def __eq__(self, other):
        if not isinstance(other, type(self)): return NotImplemented
        return self.username == other.username and self.password == other.password


class UserEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, User):
            return {
                "username": obj.username,
                "password": obj.password
            }
        return super(UserEncoder, self).default(obj)
