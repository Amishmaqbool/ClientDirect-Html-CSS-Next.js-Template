from neo4j import Session

from DAL.DTOs import EntityDTO, EntityCreateDTO



class EntityRepo:
    def __init__(self, conn:Session) -> None:
        self.conn = conn

    def exists(e:EntityCreateDTO) -> bool:
        return False

    def create(self, e:EntityCreateDTO) -> EntityDTO:
        query = """
        CREATE (e:Entity {id: randomUUID(), title: $title, category_id: $category_id, category_type_id: $category_type_id})
        WITH e
            UNWIND keys($attribs) AS key
            SET e[key] = $attribs[key]
        RETURN e
        """
        parameters = {
            "title": e.title,
            "category_id": e.category_id,
            "category_type_id": e.categroy_type_id,
            "attribs": e.attribs,
        }

        e_new = self.conn.run(query=query, parameters=parameters).data()
        return e_new

    def create(self, e:EntityCreateDTO) -> EntityDTO:
        query = """
        CREATE (e:Entity {id: randomUUID(), title: $title, category_id: $category_id, category_type_id: $category_type_id})
        WITH e
            UNWIND keys($attribs) AS key
            SET e[key] = $attribs[key]
        RETURN e
        """
        parameters = {
            "title": e.title,
            "category_id": e.category_id,
            "category_type_id": e.categroy_type_id,
            "attribs": e.attribs,
        }

        e_new = self.conn.run(query=query, parameters=parameters).data()
        return e_new

    def getById(self, id:str) -> EntityDTO:
        query = """
        MATCH (e:Entity {id: $id})
        RETURN e
        """
        parameters = {"id": id}
        e = self.conn.run_query(query, parameters)
        return e