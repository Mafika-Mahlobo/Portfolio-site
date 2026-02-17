const { check } = require('express-validator');

const registerChecks = [
    check('name', 'Name is required!').trim().notEmpty(),
    check('email', 'Email field is required').trim().notEmpty(),
    check('email', 'Invalid email').trim().isEmail(),
    check('password', 'Password field is required').notEmpty(),
    check('password', 'Password does not meet security requirements').isStrongPassword()
];

module.exports = registerChecks;