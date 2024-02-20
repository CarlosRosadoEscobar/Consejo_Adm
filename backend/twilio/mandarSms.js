require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
        from: '+12177344976', 
        body: 'Mensaje de Prueba Zascita', 
        to: '+525563776118'})
      .then(message => console.log(message.sid));

