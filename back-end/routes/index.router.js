const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/user.controller');
const ctrlEvent = require('../controllers/event.controller');
const forms = require('../controllers/forms.controller');
const cors = require('./cors');
const nodemailer = require('nodemailer');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/home',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/new-event', ctrlEvent.save)
// router.post('/insert-new-form',ctrlEventForms.saveNew)
// router.get('/get-form-data-by-id/:formID', forms.getFomData);

router.route('/new-mail')
    .options(cors.cors, (req, res) => {
        debugger
        console.log('coming email here');
        res.sendStatus(200);
})
    .post(cors.cors, (req, res, next) => {
        
        var transporter = nodemailer.createTransport({
            service: 'outlook',
            auth: {
                user: "bariudin123@outlook.com",
                pass: "Db307758334"
            }
        });
        var mailOptions = {
            from: "bariudin123@outlook.com",
            to: req.body.members,
            subject: "Event App Action-Center",
            text:
            `Congratulation! You have been invited to new event!!
            Please fill the following form:  
            http://localhost:4200/${req.body.formName}
            It is important to know that:`,

        };
        mailOptions.text += req.body.message
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
                res.send('error');
            }
            else {
                console.log('msg sent : ' + info.response);
                res.send('sent successfully');
            }
        })
        

})

module.exports = router;



