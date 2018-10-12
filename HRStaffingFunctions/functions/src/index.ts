import * as functions from 'firebase-functions';
import sendgrid = require('sendgrid');

const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'memfard@gmail.com',
        pass:'72348613*Rr'
    }

});

let HelperOptions = {
    from:'fsdfsd <memfard@gmail.com>',
    to: 'fsdfsd <memfard@gmail.com>',
    subject: 'asdasd',
    text: 'dasdasdasd'
};

transporter.sendMail(HelperOptions, (error, info) => {
    if(error){
        console.log(error);
    }
    console.log("SEND!");
    console.log(info);
})


// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
 transporter.sendMail(HelperOptions, (error, info) => {
    if(error){
        console.log(error);
    }
    console.log("SEND!");
    console.log(info);
})
});
