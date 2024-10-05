from neo4j import GraphDatabase

from neo4j.exceptions import DatabaseUnavailable
from contextlib import contextmanager

from common import AppConfig



__driver__ = None
def __db_init__():
    global __driver__
    if not __driver__:
        __driver__ = GraphDatabase.driver(AppConfig.NEO4J_URI, auth=(AppConfig.NEO4J_USER, AppConfig.NEO4J_PASSWORD))

# Function to close the Neo4j driver
def __db_cleanup__():
    global __driver__
    if __driver__:
        __driver__.close()



@contextmanager
def __get_session__():
    global __driver__
    if not __driver__: raise DatabaseUnavailable()
    
    conn = __driver__.session()
    try:
        yield conn
    finally:
        conn.close()
async def get_conn():
    with __get_session__() as conn:
        yield conn
