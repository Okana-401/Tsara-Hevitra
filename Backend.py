import openai
from fastapi import FastAPI
from pydantic import BaseModel

openai.api_key = "YOUR_API_KEY"  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

app = FastAPI()

class PromptRequest(BaseModel):
    prompt: str

@app.post("/get-response")
async def get_response(request: PromptRequest):
    prompt = request.prompt
    response = openai.Completion.create(
        engine="text-davinci-003",  GPT-4
        prompt=prompt,
        max_tokens=150
    )
    return {"response": response.choices[0].text.strip()}
