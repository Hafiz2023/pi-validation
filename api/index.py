# import resend
# from typing import Dict
# from fastapi import FastAPI

# resend.api_key = "re_FdTHKbZc_8pirhhFia33VUwAkbmFeRbJj"

# app = FastAPI(docs_url="/api/py/docs", openapi_url="/api/py/openapi.json")

# @app.post("/")
# def send_mail() -> Dict:
#     params: resend.Emails.SendParams = {
#         "from": "onboarding@resend.dev",
#         "to": 'hafizadil909@gmailcom',
#         "subject": "Hello World",
#         "html": "<strong>it works!</strong>",
#     }
#     email: resend.Email = resend.Emails.send(params)
#     return email

# ### Create FastAPI instance with custom docs and openapi url


# @app.get("/api/py/helloFastApi")
# def hello_fast_api():
#     return {"message": "Hello from FastAPI"}

import os
from typing import Dict

from fastapi import FastAPI, Body

import resend
from pydantic import BaseModel

resend.api_key = ""

app = FastAPI(docs_url="/api/py/docs", openapi_url="/api/py/openapi.json")

class EmailRequest(BaseModel):
    body: str

@app.post("/api/py/send_mail")
def send_mail(request: EmailRequest) -> Dict:
    params: resend.Emails.SendParams = {
        "from": 'onboarding@resend.dev',
        "to": 'hafizadil909@gmail.com',
        "subject": "pi email",  # Get subject from request
        "html": request.body,  # Get HTML content from request",
    }
    email: resend.Email = resend.Emails.send(params)
    return email