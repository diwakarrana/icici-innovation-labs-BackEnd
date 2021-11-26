// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs


const sender = 'diwakarrana464@gmail.com';
const recipient = 'ranapro97@gmail.com';


const sgMail = require('@sendgrid/mail');
const API_KEY = "Add here your sendgrid api key";

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setApiKey(API_KEY);
const msg = {
  to: recipient, // Change to your recipient
  from: sender, // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then((req, res) => {
    console.log('Email sent');
    console.log(res);
  })
  .catch((error) => {
    console.error("sendgrid service is available right now");
    console.log("we are trying with another service provider");
    mailGunSender();
  })

//code using mail gun you can, we can send mails......

function mailGunSender(){
  const mailgun = require("mailgun-js");
  const DOMAIN = 'add your company domain here';
  const api_key = 'add here mailgun api key';
  const mg = mailgun({apiKey: api_key, domain: DOMAIN});
  const data = {
      from: 'diwakarrana464@gmail.com',
      to: 'ranapro97@gmail.com',
      subject: 'Hello',
      text: 'Testing some Mailgun awesomness!'
  };
  mg.messages().send(data, function (error, body) {
      
      if(error){
        console.log("something went wrong");
      }
  });
}



  