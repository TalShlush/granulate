from db.in_memory_db import InMemoryDB


class UserDao:
    def get_users(self):
        return InMemoryDB.users

    def add_user(self, user):
        # TODO check if user exists
        InMemoryDB.users.append(user)
        return user

    def find_user_by_name_and_password(self, username, password):
        user = next(
            (user for user in InMemoryDB.users if user.username == username and user.password == password),
            None
        )

        if user is None:
            raise RuntimeError("Wrong password or wrong username")

        return user
