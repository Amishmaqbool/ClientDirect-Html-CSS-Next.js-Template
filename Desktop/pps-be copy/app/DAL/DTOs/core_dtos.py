from typing import List, Dict
from pydantic import BaseModel

class CategoryCreateDTO(BaseModel):
    title:str
class CategoryDTO(CategoryCreateDTO):
    id:str



class TypeCreateDTO(BaseModel):
    title:str
    category_id:str
    attribs:List[str]
class TypeDTO(TypeCreateDTO):
    id:str



class EntityCreateDTO(BaseModel):
    title:str
    category_id:str
    category_type_id:str
    attribs:Dict[str, str]
class EntityDTO(EntityCreateDTO):
    id:str