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
