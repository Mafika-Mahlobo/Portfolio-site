const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    res.json({msg: 'Enter Profile details'});
});

router.put('/', (req, res) => {
    res.json({msg: 'Update profile detials'});
});

module.exports = router;