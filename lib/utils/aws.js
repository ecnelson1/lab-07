require('dotenv').config;
const { MediaLive } = require('aws-sdk');
const AWS = require('aws-sdk');

const SESConfig = {
    accessKeyId:process.env.AWS_SES_KEY,
    secretAccessKey:AWS_SES_SEcret_key,
    region: process.env.AWS_SES_Region
};
var params = {
    Source: process.env.SOURCE_ADDY,
    Destination: {
        ToAddresses:
    },
    ReplyToAddresses:{

    },
    Message:{
        Body:{
            HTML: {
                Charset: "UTF-8",
                Data: 'This is the Text!'
            }
        },
        Subject:{
            Charset: "UTF-8",
            Data: 'Order Information'
        }
    }
};
new AWS.SES(SESConfig).sendEmail(params).promise().then((res) => {

})
