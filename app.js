const express = require('express');

const app = express();

app.use(express.json());

//--------------------Web--------------------//

app.get('/', (req, res) => {
  res.send('Hello');
});

//--------------------Account--------------------//

class Account {
  constructor(name, pwd, new_name = null, new_pwd = null, user_token = null, user_id = null) {
    this.name = name;
    this.pwd = pwd;
    this.new_name = new_name;
    this.new_pwd = new_pwd;
    this.user_token = user_token;
    this.user_id = user_id;
  }

  async create() {
  }

  async delete() {
  }

  async edit() {
  }

  async get() {
  }
}

app.post('/api/account/create', async (req, res) => {
  const { name, pwd } = req.body;
  const account = new Account(name, pwd);
  await account.create();
  res.json({ message: 'Account created' });
});

app.post('/api/account/delete', async (req, res) => {
  const { name, pwd } = req.body;
  const account = new Account(name, pwd);
  await account.delete();
  res.json({ message: 'Account deleted' });
});

app.post('/api/account/edit/name', async (req, res) => {
  const { name, pwd, new_name } = req.body;
  const account = new Account(name, pwd, new_name);
  await account.edit();
  res.json({ message: 'Account name updated' });
});

app.post('/api/account/edit/pwd', async (req, res) => {
  const { name, pwd, new_pwd } = req.body;
  const account = new Account(name, pwd, null, new_pwd);
  await account.edit();
  res.json({ message: 'Password updated' });
});

app.post('/api/account/get', async (req, res) => {
  const { user_token, user_id } = req.body;
  const account = new Account(null, null, null, null, user_token, user_id);
  await account.get();
  res.json({ message: 'Account details fetched' });
});

//--------------------Message--------------------//

class Message {
  constructor(user_token, msg = null, ch_id = null, msg_id = null, new_msg = null) {
    this.user_token = user_token;
    this.msg = msg;
    this.msg_id = msg_id;
    this.new_msg = new_msg;
    this.ch_id = ch_id;
  }

  async create() {
  }

  async delete() {
  }

  async edit() {
  }

  async get() {
  }
}

app.post('/api/message/create', async (req, res) => {
  const { user_token, msg, ch_id } = req.body;
  const message = new Message(user_token, msg, ch_id);
  await message.create();
  res.json({ message: 'Message created' });
});

app.post('/api/message/delete', async (req, res) => {
  const { user_token, msg_id } = req.body;
  const message = new Message(user_token, null, null, msg_id);
  await message.delete();
  res.json({ message: 'Message deleted' });
});

app.post('/api/message/edit', async (req, res) => {
  const { user_token, msg_id, new_msg } = req.body;
  const message = new Message(user_token, null, null, msg_id, new_msg);
  await message.edit();
  res.json({ message: 'Message updated' });
});

app.post('/api/message/get', async (req, res) => {
  const { user_token, msg_id } = req.body;
  const message = new Message(user_token, null, null, msg_id);
  await message.get();
  res.json({ message: 'Message details fetched' });
});

//--------------------Server--------------------//

app.listen(3000);
