import json
import logging

from typing import Dict
from functools import wraps
from pydantic import BaseModel
from fastapi import HTTPException
from fastapi.responses import JSONResponse

# from .app_config import AppConfig


def endpoint_wrapper(handler):
    @wraps(handler)
    async def wrapper(*args, **kwargs):
        code:int = 200
        message:str = None
        response:Dict = None
        logger = logging.getLogger()
        headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
        }
        try:
            # # Optionally log 
            # logger.info(event)
            result = await handler(*args, **kwargs)
            if isinstance(result, BaseModel): result = result.model_dump(exclude_none=True)
            response = JSONResponse(status_code=code, content=result, headers=headers)
            return response
        except PermissionError as pe:
            logger.error(pe, exc_info=True)
            code = 403; message = "You are not authorized to access this resource"
        except Exception as ex:
            logger.error(ex, exc_info=True)
            code = 500
            # TODO: set it using .env
            is_dev = True
            
            # Return exception message if it is DEV deployment
            # OR
            # Exception is of type ValueError/AttributeError
            message = "Internal Server Error"
            if is_dev or isinstance(ex, ValueError) or isinstance(ex, AttributeError):
                message = str(ex)

        raise HTTPException(status_code=code, detail=message, headers=headers)
    return wrapper
