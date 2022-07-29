from sqlalchemy.orm import Session
from . import models


def getById(db: Session, id_: int):
    return db.query(models.TestModel).filter(models.TestModel.id == id_).first()
