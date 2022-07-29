from pydantic import BaseModel


class TestSchema(BaseModel):
    id: int
    field1: str
