import json

from typing import Dict, List
from functools import lru_cache
from .app_config import AppConfig



class SharedVarsCollection:
    CATEGORIES:Dict[int, str] = {}
    CAT_SUBTYPES:Dict[int, str] = {}
    RELATIONSHIP_PAIRS:Dict[int, List[str]] = {}

    @staticmethod
    def load_categories():
        with open(AppConfig.CATEGORY_FILE_NAME, "r", encoding="utf8") as fd:
            data = json.load(fd)
    @staticmethod
    def save_categories():
        with open(AppConfig.CATEGORY_FILE_NAME, "w", encoding="utf8") as fd:
            json.dump([v.model_dump() for v in list(SharedVarsCollection.CATEGORIES.values())], fd)

    @staticmethod
    def load_types():
        with open(AppConfig.CATEGORY_SUBTYPE_FILE_NAME, "r", encoding="utf8") as fd:
            SharedVarsCollection.CAT_SUBTYPES = json.loads(fd.read())
    @staticmethod
    def save_types():
        with open(AppConfig.CATEGORY_SUBTYPE_FILE_NAME, "w", encoding="utf8") as fd:
            fd.write(json.dumps(SharedVarsCollection.CAT_SUBTYPES))

@lru_cache
def __init_load_cache__():
    svc = SharedVarsCollection()
    svc.load_types()
    svc.load_categories()
    # svc.CAT_SUBTYPES = json.loads(AppConfig.CATEGORY_SUBTYPE_FILE_NAME)
    # svc.RELATIONSHIP_PAIRS = json.loads(AppConfig.RELATIONSHIP_PAIR_FILE_NAME)
    return svc



SharedVars = __init_load_cache__()
