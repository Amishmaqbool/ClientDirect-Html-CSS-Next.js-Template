# from DAL.models import  NodeCategory, NodeType, RelationshipPair
import uuid
from fastapi import APIRouter
from fastapi import APIRouter, status as HTTPStatusCode

from common import endpoint_wrapper, SharedVars
from DAL.DTOs import CategoryDTO, CategoryCreateDTO, \
                     TypeDTO, TypeCreateDTO



router = APIRouter(
    tags=["admin"],
    responses={HTTPStatusCode.HTTP_404_NOT_FOUND: {"err": "Requested resource is either relocated or does not exist"}},
)

@router.post("/category")
@endpoint_wrapper
async def create_category(dto:CategoryCreateDTO):
    if str(dto.title.strip().lower()) in [v.title.lower() for v in SharedVars.CATEGORIES.values()]:
        raise Exception(f"Category '{dto.title}' already exists")
    
    c = CategoryDTO(id=str(uuid.uuid4()), title=dto.title.strip())
    SharedVars.CATEGORIES[c.id] = c
    SharedVars.save_categories()
    return c

@router.get("/category/{id}")
@endpoint_wrapper
async def get_category(id:str):
    if id not in SharedVars.CATEGORIES.keys():
        raise Exception(f"Category ID [{id}] does not exists")
    return SharedVars.CATEGORIES[id]

@router.post("/type")
@endpoint_wrapper
async def create_type(dto:TypeCreateDTO):
    if str(dto.category_id) not in SharedVars.CATEGORIES.keys():
        raise Exception(f"Category ID [{dto.category_id}] does not exists")
    if str(dto.title.strip().lower()) in [v.title.lower() for v in SharedVars.CAT_SUBTYPES.values()]:
        raise Exception(f"Type '{dto.title}' already exists")
    
    t = TypeDTO(id=str(uuid.uuid4()), category_id=dto.category_id, title=dto.title.strip(), attribs=[a.strip() for a in dto.attribs])
    SharedVars.CAT_SUBTYPES[t.id] = t
    SharedVars.save_types()
    return t

@router.get("/type/{id}")
@endpoint_wrapper
async def get_type(id:int):
    if id not in SharedVars.CAT_SUBTYPES.keys():
        raise Exception(f"Type ID [{id}] does not exists")
    
    return SharedVars.CAT_SUBTYPES[id]
