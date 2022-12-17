from ariadne import ObjectType, convert_kwargs_to_snake_case

from dao import graphDao, userDao
from db.in_memory_db import InMemoryDB
from service.auth_service import AuthService

query = ObjectType("Query")

authService = AuthService()

@query.field("login")
@convert_kwargs_to_snake_case
async def resolve_login(obj, info, username, password):
    user = userDao.find_user_by_name_and_password(username=username, password=password)
    success = False
    if (user):
        success = True
        token =  authService.create_token(username, password)        
        InMemoryDB.token = token
                
    return {
        "success": success,
        "token": token
    }
    
@query.field("logout")
@convert_kwargs_to_snake_case
async def resolve_logout(obj, info, username, password):
    user = userDao.find_user_by_name_and_password(username=username, password=password)
    success = False
    if (user):
        success = True
        token =  authService.create_token(username, password)        
        InMemoryDB.token = token
                
    return {
        "success": success,
        "token": token
    }