const { check } = require('express-validator');

const loginChecks = [
    check('email', 'Email field is required').trim().notEmpty(),
    check('email', 'Invalid email').trim().isEmail(),
    check('password', 'Password field is required').notEmpty()
]

module.exports = loginChecks;