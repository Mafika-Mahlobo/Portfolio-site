const jwt = require('jsonwebtoken');
const config = require('config')

// Sign and return JWT token
exports.issueToken = (payload) => {
    try {
        const token = jwt.sign(
        {id: payload},
        config.get('jwtSecret'),
        {expiresIn: '30m'}
        );

        return {token: token};

    } catch (error) {
        console.log(error);
        return error;
    }
}