const mongoose = require('mongoose');
const _ = require('lodash');

const Form = mongoose.model('Form');
const mailer = require('../controllers/forms.controller');
const fs = require('fs');


//get from data by form id
module.exports.getFormData = (req, res, next) => {
    Forms.findOne({ formName: req.formName },
        (err, event) => {
            if (!user) {
                console.log(req.formName)
                return res.status(404).json({ status: false, message: 'Event record not found.' });
            }
            else
                return res.status(200).json({ status: true, event : _.pick(event,['formID','formName','location','avgSpending','eventDuration','images','peopleRecommendation','formUrl']) });
        }
    );
}
// //get from url by form id
// module.exports.getFormUrl = (req, res, next) => {
//     Forms.findOne({ _id: req._id },
//         (err, event) => {
//             if (!user)
//                 return res.status(404).json({ status: false, message: 'Event record not found.' });
//             else
//                 return res.status(200).json({ status: true, event : _.pick(event,['formID','formUrl']) });
//         }
//     );
// }
