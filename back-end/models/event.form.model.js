const mongoose = require('mongoose');


var eventFormSchema = new mongoose.Schema({
    formId: {
        type: String,
        required: 'Event Form id can\'t be empty'
    },
    formName: {
        type: String,
        required: 'Event Form name can\'t be empty'
    },
    location: {
        type: String,
        required:'Must enter location'
    },
    avgSpending: {
        type: Number,
    },
    eventDuration: {
        type:String,
    },
    images: {
        type: Array,
        unique: true
    },
    peopleRecommendation: {
        type: String,
    },
    formUrl: {
        type: String,
        unique: true,
        required:true
    }

});

mongoose.model('Event', eventFormSchema);