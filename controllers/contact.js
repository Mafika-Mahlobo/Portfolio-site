const transporter = require('./nodemailer');
const config = require('config');

exports.sendMail = async (req, res) => {
    const { title, message } = req.body;

    try {
        
        const info = await transporter.sendMail({
            from: `Portfolio <${config.get('email')}>`,
            to: config.get('email'),
            subject: title,
            text: message
        });

        res.status(200).json({msg: 'Message sent'});

    } catch (error) {
        console.log(error.message);
        return res.status(200).json({msg: 'Oops! we ran into an issue. Contact the administrator'});
    }
}