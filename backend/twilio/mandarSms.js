require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

async function enviarSMS(nombre, telefono, codigoSms) {
    try {
        const message = await client.messages.create({
            from: process.env.NUMERO_TWILIO,
            body: `¡Hola!, ${nombre}. Tu código de verificación para Zascita es  ${codigoSms}. Por favor, úsalo dentro de los próximos 5 minutos. ¡Gracias!`,
            to: "+52" + telefono
            //to: '+525563776118'})
        });
        console.log(message.sid);
    } catch (error) {
        console.error('Error al enviar el SMS:', error);
    }
}

module.exports = { enviarSMS };

/* 



*/