
import os
from typing import Dict

from fastapi import FastAPI, Body

import resend
from pydantic import BaseModel

resend.api_key = "re_eoBypdNF_89DU2ZLAJjoHymwR6qUXkeMb"

app = FastAPI(docs_url="/api/py/docs", openapi_url="/api/py/openapi.json")

class EmailRequest(BaseModel):
    body: str

@app.post("/api/py/send_mail")
def send_mail(request: EmailRequest) -> Dict:
    params: resend.Emails.SendParams = {
        "from": 'onboarding@resend.dev',
        "to": 'rahej716@gmail.com',
        "subject": "pi email",  # Get subject from request
        "html": request.body,  # Get HTML content from request",
    }
    email: resend.Email = resend.Emails.send(params)
    return email