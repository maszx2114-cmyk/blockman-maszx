const express = require('express');
const path = require('path');
const configRouter = require('./route/config');

const userRouter = require('./route/user');
const gamesRouter = require('./route/games');

const decorationRouter = require('./route/decoration');
const mailboxRouter = require('./route/mailbox');

// Dont change these
const app = express();
const port = 3000;
app.use(express.json());

app.use('/config', configRouter);
app.use('/user', userRouter);
app.use('/game', gamesRouter);

app.use('/decoration', decorationRouter);

app.use('/mailbox', mailboxRouter);

app.all('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.listen(port, () => {
  console.log(`Success your server is available at http://localhost:${port}`);
});