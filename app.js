const credetials = {
    apiKey: '4fc63b75c4d39db96e4895fa652a74a8399a1777339d1a777e4d236908d3b6b5', 
    username: 'sandbox'
}

const AfricasTalking  = require('africastalking')(credetials)
const sms = AfricasTalking.SMS;
function sendMessage() {
    const options = {
        to: '+254722925253',
        message: 'Hello Victor',
        from: '32192'
    }
    sms.send(options)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
    
}

sendMessage()