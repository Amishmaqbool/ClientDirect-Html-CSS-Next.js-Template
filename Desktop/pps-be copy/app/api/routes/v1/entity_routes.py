# from DAL.models import  NodeCategory, NodeType, RelationshipPair
from fastapi import APIRouter
from fastapi import APIRouter, status as HTTPStatusCode

from common import endpoint_wrapper, SharedVars
from DAL import get_graphdb_conn
from DAL.DTOs import EntityCreateDTO, EntityDTO

# TODO: __init__ repos
from DAL.repositories.entity_repo import EntityRepo


router = APIRouter(
    tags=["entity"],
    responses={HTTPStatusCode.HTTP_404_NOT_FOUND: {"err": "Requested resource is either relocated or does not exist"}},
)

@router.post("/entity")
@endpoint_wrapper
async def create_entity(dto:EntityCreateDTO):
    if str(dto.category_id) not in SharedVars.CATEGORIES.keys():
        raise Exception(f"Category ID [{dto.category_id}] does not exists")
    if str(dto.category_type_id) not in SharedVars.CAT_SUBTYPES.keys():
        raise Exception(f"Type ID [{dto.category_type_id}] does not exists")
    
    repo = EntityRepo(get_graphdb_conn())
    e = repo.create(dto)
    return e

@router.get("/category/{id}")
@endpoint_wrapper
async def get_category(id:int):
    if str(id) not in SharedVars.CATEGORIES.keys():
        raise Exception(f"ID {id} does not exists")
    
    return SharedVars.CATEGORIES[str(id)]

@router.post("/type")
@endpoint_wrapper
async def create_type(dto:AttribsDTO):

    if str(dto.id) in SharedVars.CAT_SUBTYPES.keys():
        raise Exception(f"ID {dto.id} already exists")
    
    SharedVars.CAT_SUBTYPES[str(dto.id)] = dto.model_dump(exclude=["id"])
    SharedVars.save_types()
    return dto

@router.get("/type/{id}")
@endpoint_wrapper
async def get_type(id:int):
    if str(id) not in SharedVars.CAT_SUBTYPES.keys():
        raise Exception(f"ID {id} does not exists")
    
    return SharedVars.CAT_SUBTYPES[str(id)]