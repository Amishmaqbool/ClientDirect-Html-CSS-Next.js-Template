from fastapi import FastAPI
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware

from common import SharedVars
from DAL import init_graph_db, cleanup_graphdb



@asynccontextmanager
async def lifespan(app: FastAPI):
    init_graph_db()
    yield
    cleanup_graphdb()
app = FastAPI(
    version="0.0.1",
    title="AvaConsult Backend AppServer",
    summary="Restful APIs for AvaConsult Application",
    swagger_ui_parameters={"defaultModelsExpandDepth": -1},
    description="This is the AvaConsult backend application server apis for frontend",
    lifespan=lifespan
)



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True
)


from api.routes import config_router, admin_router_v1
app.include_router(config_router)
app.include_router(admin_router_v1, prefix="/api/v1/admin")
