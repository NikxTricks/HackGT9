require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AITH_TOKEN;
const client =  require('twilio')(accountSid, authToken);

client.messages.create({
    body: 'Hello, you have a compatibility on BeeBuds, with someone over 60 percent!',
    from: '+18583658242',
    to: '+16782005732'

    
})
.then( (message) => console.log(message))
.catch( (err) => console.log(err) );