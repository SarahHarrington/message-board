var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var MessagesSchema = new Schema ({
    name: String,
    message: String
});

var Messages = mongoose.model('Message', MessagesSchema, 'messages');

//post route for message
router.post('/', function(req, res){
    console.log(req.body);
    var messageToSave = req.body;
    var message = new Messages({
        name: messageToSave.name,
        message: messageToSave.message
    })
    message.save(function(err, savedMessage){
        if (err) {
            res.sendStatus(500);
        } else {
            res.send(savedMessage);
        }
    })
})

router.get('/', function(req, res){
    Messages.find({}, function(err, foundMessages){
        if (err){
            res.sendStatus(500);
        } else {
            res.send(foundMessages);
        }
    })
})


module.exports = router;