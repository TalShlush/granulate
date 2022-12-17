import base64

from dao import userDao


class AuthService:
    def handle_auth(self, headers):
        if headers['Authorization'] is not None:
            basic_auth = headers['Authorization'].split("Basic ")[1]
            encoded = base64.b64decode(basic_auth.encode('ascii'))
            decoded = encoded.decode('ascii')
            user = userDao.find_user_by_name_and_password(decoded.split(":")[0], decoded.split(':')[1])
            return user is not None
        else:
            return False

    def create_token(self, user, password):
        message_bytes = "{0}:{1}".format(user, password).encode('ascii')
        base64_bytes = base64.b64encode(message_bytes)
        return base64_bytes.decode('ascii')
