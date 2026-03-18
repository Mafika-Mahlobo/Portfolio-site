const { check } = require('express-validator');

const projectsCheck = [
    check('title', 'Title field is required').trim().notEmpty(),
    check('title', 'You\'ve exceeded the allowed character count (max 20)').isLength({max: 20}),
    check('description', 'Description field is required').notEmpty(),
    check('description', 'You\'ve exceeded the allowed character count (max 500)').isLength({max: 500}),
];

module.exports = projectsCheck;