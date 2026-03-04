const express = require('express');
const { sendMail } =  require('../../controllers/contact');
const router = express.Router();

// @route POST /api/contact
// @desc Send email
// @access public
router.post('/', sendMail);

module.exports = router;