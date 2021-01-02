const mongoose = require('mongoose');


var eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Event name can\'t be empty'
    },
    members: {
        type: String,
        required:'Must enter at least one member'
    },
    formID: {
        type: String,
        unique: true
    },
    message: {
        type: String,
        required: ' message cannot be empty'
    }
});

mongoose.model('Event', eventSchema);