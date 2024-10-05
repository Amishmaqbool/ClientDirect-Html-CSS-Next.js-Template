from uuid import UUID
from typing import Dict
from datetime import date
from pydantic import BaseModel



class Node(BaseModel):
    ID:UUID
    CategoryID:int
    CategorySubTypeID:int
    Title:str
    Attributes:Dict[str, any]

class RelationshipPair(BaseModel):
    Node1ID:UUID
    Node2ID:UUID
    n1n2_relationship_pair_id: list[int]
        