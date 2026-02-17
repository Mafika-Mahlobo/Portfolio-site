const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { uploadFile } = require('./fileUpload/fileUpload');
const { issueToken } = require('./jwt');

// Add user
exports.addUser = async (req, res) => {

    const { name, email, password, hero, bio } = req.body;
    let fileData;
    let pictureInfo;

    try {
        // get user
        const user = await User.findOne({email: email});

        //check user
        if (user) {
            return res.json({msg: 'A user with the same email already exist!'});
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // check upload
        if (req.file) {

            // upload picture
            fileData = await uploadFile(req.file.buffer, 'Portfolio/profile');

            //check upload
            if (fileData) {
                pictureInfo = {
                    url: fileData.secure_url,
                    public_id: fileData.public_id
                };
            } 
        }

        // cleate user
        const newUser = new User({
            name: name,
            email: email,
            password: hashedPassword,
            hero: hero,
            bio: bio,
            profile_pic: pictureInfo
        });

        // save user
        await newUser.save();

        return res.json(issueToken(newUser._id));


    } catch (error) {
        return res.status(500).json({msg: `Error - ${error}`});
    }
}