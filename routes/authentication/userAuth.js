const express = require('express');
const registerChecks = require('../../validators/registerChecks');
const loginChecks = require('../../validators/loginChecks')
const validate = require('../../validators/validate');
const { addUser } = require('../../controllers/register');
const { login } =  require('../../controllers/login');
const multer = require('multer');

upload = multer({storage: multer.memoryStorage()});

const router = express.Router()

// @route POST /api/auth/register
// @desc Add user to the database
// @access public
router.post('/register', registerChecks, validate, addUser);


// @route POST /api/auth/login
// @desc User login
// @access public
router.post('/login', loginChecks, validate, login);

module.exports = router;