const { check } = require('express-validator');

const profileChecks = [
    check('name', 'Name field is required').trim().notEmpty(),
    check('name', 'Invalid name').trim().isLength({min: 3, max: 19}),
    check('email', 'Email field is required').trim().notEmpty(),
    check('email', 'Invalid email').trim().isEmail(),
    check('password', 'Password field is required').notEmpty(),
    check('password', 'Password does not meet security requirements').isStrongPassword(),
    check('hero', 'Hero section is required').notEmpty(),
    check('hero', 'You exceeded allowed maximum character count').isLength({max: 200}),
    check('bio', 'Bio section is required').notEmpty(),
    check('bio', 'You exceeded allowed maximum character count').isLength({max: 600})
];

module.exports = profileChecks;