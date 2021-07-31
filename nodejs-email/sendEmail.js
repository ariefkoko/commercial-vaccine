const nodemailer = require('nodemailer');

class SendEmail {
    static senddingEmail(value){
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'Your Email',
                pass: 'your Email Password'
            }
        });
        
        const mailOptions = {
            from: 'Your Email',
            to: `send To email`,
            subject: 'Sending Email using Nodejs',
            text: 'That was easy!'
        };
        
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) throw err;
            console.log('Email sent: ' + info.response);
        });
    }
}

module.exports = SendEmail