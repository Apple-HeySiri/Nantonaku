import fastapi

app = fastapi.FastAPI()

#--------------------Account--------------------#

class Account:
    def set(self, name: str, pwd: str, new_name: str = None, new_pwd: str = None, user_token: str = None, user_id: str = None):
        self.name = name
        self.pwd = pwd
        self.new_name = new_name
        self.new_pwd = new_pwd
        self.user_token = user_token
        self.user_id = user_id

    async def create(self):
        return

    async def delete(self):
        return

    async def edit(self):
        return

    async def get(self):
        return

@app.post("/api/account/create")
async def main(name: str, pwd: str):
    return

@app.post("/api/account/delete")
async def main(name: str, pwd: str):
    return

@app.post("/api/account/edit/name")
async def main(name: str, pwd: str, new_name: str):
    return

@app.post("/api/account/edit/pwd")
async def main(name: str, pwd: str, new_pwd: str):
    return

@app.post("/api/account/get")
async def main(user_token: str, user_id: str):
    return

#--------------------Message--------------------#

class Message:
    def set(self, user_token: str, msg: str = None, ch_id: str = None, msg_id: str = None, new_msg: str = None):
        self.user_token = user_token
        self.msg = msg
        self.msg_id = msg_id
        self.new_msg = new_name

    async def create(self):
        return

    async def delete(self):
        return

    async def edit(self):
        return

    async def get(self):
        return

@app.post("/api/message/create")
async def main(user_token: str, msg: str, ch_id: str):
    return

@app.post("/api/message/delete")
async def main(user_token: str, msg_id: str):
    return

@app.post("/api/message/edit")
async def main(user_token: str, msg_id: str, new_msg: str):
    return

@app.post("/api/message/get")
async def main(user_token: str, msg_id: str):
    return

#--------------------Channel--------------------#
