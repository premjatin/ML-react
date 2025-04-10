from fastapi import FastAPI, Request
from pydantic import BaseModel
from model.llm_runner import solve_math_question

app = FastAPI()

class Question(BaseModel):
    question: str

@app.post("/solve")
async def solve(question: Question):
    code, answer = solve_math_question(question.question)
    return {"code": code, "answer": answer}
