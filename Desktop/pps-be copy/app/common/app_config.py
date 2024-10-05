import os
from functools import lru_cache
from pydantic_settings import BaseSettings



class EnvConfigReader(BaseSettings):
    NEO4J_URI: str
    NEO4J_USER: str
    NEO4J_PASSWORD: str

    CACHE_JSON_DIR_PATH: str
    CATEGORY_FILE_NAME: str
    CATEGORY_SUBTYPE_FILE_NAME: str
    RELATIONSHIP_PAIR_FILE_NAME: str

    class Config:
        env_file = ".env"

@lru_cache()
def __initialize__():
    a = EnvConfigReader()

    os.makedirs(a.CACHE_JSON_DIR_PATH, exist_ok=True)

    a.CATEGORY_FILE_NAME =os.path.join(a.CACHE_JSON_DIR_PATH, a.CATEGORY_FILE_NAME)
    a.CATEGORY_SUBTYPE_FILE_NAME =os.path.join(a.CACHE_JSON_DIR_PATH, a.CATEGORY_SUBTYPE_FILE_NAME)
    a.RELATIONSHIP_PAIR_FILE_NAME =os.path.join(a.CACHE_JSON_DIR_PATH, a.RELATIONSHIP_PAIR_FILE_NAME)
    if not os.path.exists(a.CATEGORY_FILE_NAME):
        with open(a.CATEGORY_FILE_NAME, "w+", encoding="utf8") as fd: fd.write("{}")
    if not os.path.exists(a.CATEGORY_SUBTYPE_FILE_NAME):
        with open(a.CATEGORY_SUBTYPE_FILE_NAME, "w+", encoding="utf8") as fd: fd.write("{}")
    if not os.path.exists(a.RELATIONSHIP_PAIR_FILE_NAME):
        with open(a.RELATIONSHIP_PAIR_FILE_NAME, "w+", encoding="utf8") as fd: fd.write("{}")
    return a


AppConfig = __initialize__()