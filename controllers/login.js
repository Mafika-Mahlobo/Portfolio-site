const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { issueToken } = require('./jwt');
const { json } = require('express');

// Login
exports.login = async (req, res) => {

    const { email, password } = req.body;

    try {
        // get user
        const user = await User.findOne({email: email});

        //check user
        if (!user) return res.json({msg: 'Incorrect username or password'});

        // check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.json({msg: 'Incorrect username or password'});

        // generate token
        const token = issueToken(user._id);

        return res.status(200).json(token);


    } catch (error) {
        return res.status(500).json({msg: `Error - ${error}`});
    }
}