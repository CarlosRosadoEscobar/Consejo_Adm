const MessagingResponse = require('twilio/lib/twiml/MessagingResponse');

app.post('/sms', (req,res) => {
    const twiml = new MessagingResponse();
    twiml.message('He recibido tu message');
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
})