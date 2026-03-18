const transporter = require('./utils/nodemailer');
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
        console.error('sendMail error:', error);

        if (process.env.NODE_ENV === 'production') {
            return res.status(500).json({msg: 'Oops! we ran into an issue. Contact the administrator'});
        }

        return res.status(500).json({msg: 'Oops! we ran into an issue. Contact the administrator', error: error.message});
    }
}