require('dotenv').config();

const express = require('express');
const app = express();

const session = require('express-session');
const request = require('request');
const qs = require('querystring');
const url = require('url');
const randomString = require('randomString');
const csrfString = randomString.generate();

const port = process.env.PORT || 3000;
const redirect_uri = process.env.HOST + '/redirect';

app.use(express.static('views'));

app.use(session({
  secret: randomString.generate(),
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false
}));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log('Server is up and running at port ' + port);
})
