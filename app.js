import { Hono } from 'hono';

const app = new Hono();

//--------------------Web--------------------//

app.post('/', async (c) => {
  return c.text('Hello');
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

app.post('/api/account/create', async (c) => {
  const { name, pwd } = await c.req.json();
  const account = new Account(name, pwd);
  await account.create();
  return c.json({ message: 'Account created' });
});

app.post('/api/account/delete', async (c) => {
  const { name, pwd } = await c.req.json();
  const account = new Account(name, pwd);
  await account.delete();
  return c.json({ message: 'Account deleted' });
});

app.post('/api/account/edit/name', async (c) => {
  const { name, pwd, new_name } = await c.req.json();
  const account = new Account(name, pwd, new_name);
  await account.edit();
  return c.json({ message: 'Account name updated' });
});

app.post('/api/account/edit/pwd', async (c) => {
  const { name, pwd, new_pwd } = await c.req.json();
  const account = new Account(name, pwd, null, new_pwd);
  await account.edit();
  return c.json({ message: 'Password updated' });
});

app.post('/api/account/get', async (c) => {
  const { user_token, user_id } = await c.req.json();
  const account = new Account(null, null, null, null, user_token, user_id);
  await account.get();
  return c.json({ message: 'Account details fetched' });
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

app.post('/api/message/create', async (c) => {
  const { user_token, msg, ch_id } = await c.req.json();
  const message = new Message(user_token, msg, ch_id);
  await message.create();
  return c.json({ message: 'Message created' });
});

app.post('/api/message/delete', async (c) => {
  const { user_token, msg_id } = await c.req.json();
  const message = new Message(user_token, null, null, msg_id);
  await message.delete();
  return c.json({ message: 'Message deleted' });
});

app.post('/api/message/edit', async (c) => {
  const { user_token, msg_id, new_msg } = await c.req.json();
  const message = new Message(user_token, null, null, msg_id, new_msg);
  await message.edit();
  return c.json({ message: 'Message updated' });
});

app.post('/api/message/get', async (c) => {
  const { user_token, msg_id } = await c.req.json();
  const message = new Message(user_token, null, null, msg_id);
  await message.get();
  return c.json({ message: 'Message details fetched' });
});

//--------------------Server--------------------//

app.listen(3000);
