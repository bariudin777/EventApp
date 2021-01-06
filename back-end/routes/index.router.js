const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlEvent = require('../controllers/event.controller');
const ctrlNodemailer = require('../controllers/mailer.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/home',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
//router.post('/send-mail', ctrlNodemailer.transporter.sendMail);
router.post('/new-event',ctrlEvent.save)

module.exports = router;



