


class NodeType(BaseModel):
    id: int
    title: str

class RelationshipPair(BaseModel):
    id: int
    title: str

class Node(BaseModel):
    category_id: int = None
    type_id: int = None
    title: str = None

class NodesRelationship(BaseModel):
    node1_id: str
    node2_id: str
    n1n2_relationship_pair_id: list[int]
        