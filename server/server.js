var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
var messagesRouter = require('./routes/message.router.js');

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use('/messages', messagesRouter);

var mongoose = require('mongoose');
var databaseUrl = "mongodb://localhost:27017/messageboard";

mongoose.connection.on('connected', function(){
    console.log('mongoose is connected');
})

mongoose.connection.on('error', function(){
    console.log('mongoose connection failed');
})

mongoose.connect(databaseUrl);

app.listen(port, function(req, res){
    console.log('listing on port', port);
})