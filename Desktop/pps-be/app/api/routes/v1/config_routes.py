import json
from typing import List
from fastapi.responses import Response
from fastapi import APIRouter, status as HTTPStatusCode

from common import SharedVars, endpoint_wrapper



router = APIRouter(
    responses={HTTPStatusCode.HTTP_404_NOT_FOUND: {"err": "Requested resource is either relocated or does not exist"}},
)

@router.get("/", include_in_schema=False)
async def home():
    return Response(status_code=HTTPStatusCode.HTTP_200_OK)

@router.get("/ping")
@endpoint_wrapper
async def ping():
    """Test route to see if server is alive"""
    return "Pong"


@router.get("/get_configuration")
@endpoint_wrapper
async def app_configurations():
    """Fetch all configuration settings"""
    # Get Gender
    categories = SharedVars.CATEGORIES

    # Get Countries List
    sub_types = SharedVars.CAT_SUBTYPES

    # Get Languages List
    relationship_pairs = SharedVars.RELATIONSHIP_PAIRS

    return {
        "categories": SharedVars.CATEGORIES,
        "category_sub_types": SharedVars.CAT_SUBTYPES,
        "relationship_pairs": SharedVars.RELATIONSHIP_PAIRS
    }
