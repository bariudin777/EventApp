const nodemailer = require('nodemailer');

class Mail{
    addr = '';
}


//first we need the transporter
module.exports.transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
        user: "bariudin123@outlook.com",
        pass: "Db307758334"
    }
});

const options = {
    from: "bariudin123@outlook.com",
    to: "bariudin77@gmail.com",
    subject: "Sending email with mu app",
    text:"wow, simple"
}

module.exports.transporter.sendMail(options, (err, info) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("sent : " + info.response);
})