import uvicorn
from fastapi import FastAPI, Depends, status
from db.database import SessionLocal
from sqlalchemy.orm import Session
from db import crud, schemas
from fastapi.staticfiles import StaticFiles


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


app = FastAPI(
    title="Test",
    contact={
        "name": "Zhao Hao",
        "email": "601095001@qq.com",
    },
    license_info={
        "name": "Apache 2.0",
        "url": "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
)
app.mount("/", StaticFiles(directory="../build", html=True), name="build")  # 挂载react编译后文件


@app.get("/test", response_model=schemas.TestSchema)
def Test(id: int, db: Session = Depends(get_db)):
    return crud.getById(db, id)


if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=8000)
