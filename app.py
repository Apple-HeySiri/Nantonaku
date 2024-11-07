import fastapi

app = fastapi.FastAPI()

@app.get("/", response_class=fastapi.responses.HTMLResponse)
async def main():
    return """
    <html>
        <head>
            <title>Test</title>
        </head>
        <body>
            <h1>Hello world!</h1>
        </body>
    </html>
    """
