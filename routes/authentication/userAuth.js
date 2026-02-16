const express = require('express');

const router = express.Router()

router.post('/register', (req, res) => {
    res.json({msg: "User registration"})
});

router.post('/login', (req, res) => {
    res.json({msg: "User login"})
});

module.exports = router;