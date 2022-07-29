from sqlalchemy import String, Column, Float, Text, Integer
from sqlalchemy.orm import relationship

from .database import Base, engine


class TestModel(Base):
    __tablename__ = "test"
    id = Column(Integer, primary_key=True, unique=True, index=True)
    field1 = Column(String)


Base.metadata.create_all(bind=engine)
