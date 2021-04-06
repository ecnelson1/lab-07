const  SES  = require('aws-sdk/clients/ses');
require('dotenv').config;

const SESConfig = {
    apiVersion: 'latest',
    accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
    region: 'us-west-2'
};

const AWS_SES = new SES(SESConfig);

let sendEmail = (message) => {
const params = {
    Source: process.envSOURCE_ADDY,
    Destination: {
        ToAddresses: [process.envSOURCE_ADDY],
    },
    ReplyToAddresses: [process.envSOURCE_ADDY],
    Message:{
        Body:{
            Html:{
                Charset: 'UTF-8',
                Data: 'Order Update'
            },
        },
        Subject: {
            Charset: "UTF-8",
            Data: 'Order Information'
        },
    },
};
return AWS_SES.sendEmail(params);
};

module.exports = { 
    sendEmail,
 };
