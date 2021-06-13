const mongoose = require('mongoose');
const _ = require('lodash');
const Event = mongoose.model('Event');
const fs = require('fs');
// const forms = require('../Forms/BirthDayForms/basic-birthday-party.json')


//get from data by form id
module.exports.getFormData = (req, res, next) => {
    Event.findOne({ formID: 1 },
        (err, event) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'Event record not found.' });
            else
                return res.status(200).json({ status: true, event : _.pick(event,['formID','formName','location','avgSpending','eventDuration','images','peopleRecommendation','formUrl']) });
        }
    );
}
//get from url by form id
module.exports.getFormUrl = (req, res, next) => {
    Event.findOne({ _id: req._id },
        (err, event) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'Event record not found.' });
            else
                return res.status(200).json({ status: true, event : _.pick(event,['formID','formUrl']) });
        }
    );
}
//save from by form id---> only by admin
// module.exports.save = (req, res, next) => {
//     var event = new Event();
//     event.formID = req.body.formID;
//     event.formName = req.body.formName;
//     event.location = req.body.location;
//     event.avgSpending = req.body.avgSpending;
//     event.eventDuration = req.body.eventDuration;
//     event.images = req.body.images;
//     event.peopleRecommendation = req.body.peopleRecommendation;
//     event.formUrl = req.body.formUrl;
//     event.save((err, doc) => {
//         if (!err) {
//             res.send(doc)
//         }
//         else {
//             return next(err);
//         }
//     });
// }


//save - to make when admin config is added
// module.exports.saveNew = (req, res, next) => {
//     var event = new Event();
//     json_file = JSON.parse(fs.readFileSync(forms))
//     event.save((err, json_file) => {
//         if (!err) {
//             res.send(json_file)
//         }
//         else {
//             return next(err);
//         }
//     });
// }