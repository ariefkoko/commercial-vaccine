const nodemailer = require('nodemailer');

class SendEmail {
    static senddingEmail(value){
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'wppq.yt@gmail.com',
                pass: 'KataSandi;'
            }
        });
        
        const mailOptions = {
            from: 'wppq.yt@gmail.com',
            to: `${value}`,
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