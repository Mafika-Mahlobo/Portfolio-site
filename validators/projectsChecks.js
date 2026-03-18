const { check } = require('express-validator');

const projectsCheck = [
    check('title', 'Title field is required').trim().notEmpty(),
    check('title', 'You\'ve exceede the allowed character count').isLength({max: 500}),
    check('description', 'Description field is required').notEmpty(),
    check('description', 'You\'ve exceede the allowed character count').isLength({max: 3000}),
];

module.exports = projectsCheck;