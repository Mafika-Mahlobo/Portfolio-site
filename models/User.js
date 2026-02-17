const mongoose = require('mongoose');

const userSchecma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    hero: {
        type: String,
    },

    bio: {
        type: String,
        required: true
    },

    profile_pic: {
        url: {
            type: String,
        },
        public_id: {
            type: String
        }
    }
});

module.exports = mongoose.model('User', userSchecma);