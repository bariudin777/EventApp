const mongoose = require('mongoose');
const _ = require('lodash');

const Event = mongoose.model('Event');
const mailer = require('../controllers/event.controller');



module.exports.save = (req, res, next) => {
    console.log("in save method");
    var event = new Event();
    event.name = req.body.name;
    event.members = req.body.members;
    event.formID = req.body.formID;
    event.message = req.body.message;
    event.save((err, doc) => {
        if (!err) {
            res.send(doc)
        }
        else {
            return next(err); 
        }
    });





}