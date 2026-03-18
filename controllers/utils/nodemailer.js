const nodemailer = require('nodemailer');
const config = require('config');

const email = config.get('email');
const appPin = config.get('appPin');

if (!email || !appPin) {
    throw new Error('Email configuration missing. Set email and appPin in environment or config.');
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: appPin
    },
});

module.exports = transporter;