require('dotenv').config();

const express = require('express');
const app = express();

const session = require('express-session');
const request = require('request');
const qs = require('querystring');
