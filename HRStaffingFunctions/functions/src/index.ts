import * as functions from 'firebase-functions';
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
    auth:{
        user:'memfard@gmail.com',
        pass:'72348613*Rr'
    }

});


// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const SendMail = functions.https.onRequest((request, response) => { 
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin");

    console.log("Send Mail request --> ", request.query);
    console.log("request --> ", request);
    var mailFrom = request.query.mailfrom;
    var mailTo = request.query.mailto;
    var mailFromName = request.query.mailfromname;
    var subject = request.query.subject;
    var mailText = request.query.mail;
    
    let HelperOptions = {
        from: mailFromName + ' <'+ mailFrom +'>',
        to: mailTo,
        subject: subject,
        text: mailText
    };

    transporter.sendMail(HelperOptions).then(() => {      
        console.log("response -->", response);
        
        return response.status(200).send("Mail sent");
    })
    .catch(error => {
        console.log(error);
        return response.status(500).send(error);
    })

    // transporter.sendMail(HelperOptions, (error, info) => {
    //     if(error){
    //         console.log(error);
    //     }
    //     console.log("Mail Sended (info)", info);
    //     console.log("response -->", response);
    // })
});
