const { json } = require('express');
const User = require('../models/User');
const { uploadFile } = require('./fileUpload/fileUpload');
const bcrypt = require('bcryptjs');


exports.addProfile = async (req, res) => {
    const { name, email, password, hero, bio } = req.body;
    let profilePic = req.files?.['profile-pic']?.[0];
    let resume = req.files?.['resume']?.[0];

    try {
        // check profile pic
        if (profilePic) {
            const picData = await uploadFile(profilePic.buffer, 'Portfolio/profile');
            profilePic = {
                url: picData.secure_url,
                public_id: picData.public_id
            }
        }

        // check resume
        if (resume) {
            const resumeData = await uploadFile(resume.buffer, 'Portfolio/profile');
            resume = {
                url: resumeData.secure_url,
                public_id: resumeData.public_id
            }   
        }

        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Updated user data
        const newData = {
            name: name,
            email: email,
            password: hashedPassword,
            hero: hero,
            bio: bio,
            profile_pic: profilePic ? profilePic : '',
            resume: resume ? resume : ''
        };

        // find and update user
        const user = await User.findOneAndUpdate(
            { _id: req.id },
            { $set:  newData},
            { returnDocument: 'after', runValidators: true }
        );

        return res.status(200).json(user);
        

    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}