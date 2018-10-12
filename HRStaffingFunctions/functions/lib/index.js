"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
// transporter.sendMail(HelperOptions, (error, info) => {
//     console.log("Transporter Send Mail");
//     if(error){
//         console.log(error);
//     }
//     console.log("SEND!");
//     console.log(info);
// })
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'memfard@gmail.com',
        pass: '72348613*Rr'
    }
});
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
exports.SendMail = functions.https.onRequest((request, response) => {
    console.log("Send Mail request --> ", request.query);
    var mailFrom = request.query.mailfrom;
    var mailTo = request.query.mailto;
    var mailFromName = request.query.mailfromname;
    var subject = request.query.subject;
    var mailText = request.query.mail;
    let HelperOptions = {
        from: mailFromName + ' <' + mailFrom + '>',
        to: mailTo,
        subject: subject,
        text: mailText
    };
    transporter.sendMail(HelperOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        console.log("Mail Sended");
    });
});
//# sourceMappingURL=index.js.map