const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
    const errors = validationResult(req);

    // Check if there are errors
    if(errors.isEmpty()) {
        return next();
    }
    
    // return errors
    return res.status(400).json({errors: errors.array()});

};

module.exports = validate;