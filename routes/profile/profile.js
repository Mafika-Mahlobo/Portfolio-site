const express = require('express');
const multer = require('multer');
const { addProfile } = require('../../controllers/profile');
const profileChecks = require('../../validators/profileChecks');
const validate = require('../../validators/validate');

const upload = multer({storage: multer.memoryStorage()})

const router = express.Router();

// @route PUT /api/users
// @desc Add and/or update user profile
// @access private
router.put('/', upload.fields([
    {name: 'profile-pic', maxCount: 1},
    {name: 'resume', maxCount: 1}
]), profileChecks, validate, addProfile);

module.exports = router;