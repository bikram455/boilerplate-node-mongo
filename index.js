const express = require('express');
require('dotenv').config();

require('./data/connection');
const routes = require('./routes');

const app = express();
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();    
});

app.use('/api', routes);

const server = app.listen(process.env.PORT, function(req, res) {
    console.log(process.env.SERVER_LISTEN_MESSAGE, server.address().port);
});