from fastapi import FastAPI
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup code
    print("Server has started")
    # App is running here
    yield  
    # App is closed here 
    print("Server is shutting down")

app=FastAPI(lifespan=lifespan)
@app.get('/')
def home():
    return{"app":"started"}
