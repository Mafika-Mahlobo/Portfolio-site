const jwt = require('jsonwebtoken');
const config = require('config')

// Validate user
exports.auth = (req, res, next) => {
    const token = req.header('auth-token');

    if (!token) return res.status(400).json({msg: 'Access denied'});

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        res.id = decoded.id;
        next()

    } catch (error) {
        res.status(401).json({msg: 'Access denied'})
    }
}