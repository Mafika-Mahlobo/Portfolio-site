const express = require('express');
const { addProfile } = require('../../controllers/profile');
const profileChecks = require('../../validators/profileChecks');
const validate = require('../../validators/validate');
const { auth } = require('../../validators/auth');
const { profileUploadMiddleware } = require('../../controllers/fileUpload/multerUploader');

const router = express.Router();

// @route PUT /api/users
// @desc Add and/or update user profile
// @access private
router.put('/', auth, profileUploadMiddleware, profileChecks, validate, addProfile);

module.exports = router;