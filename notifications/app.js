'use strict';

const express = require('express');
const routes = require('./resources/routes');
const app = express();

app.get('/notifications', routes.notifications);

app.listen(3000);

module.exports = app;