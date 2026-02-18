const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20,
    },

    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500,
    },

    pictures: [
        {
            url: {
                type: String,
            },
            public_id: {
                type: String
            }
        }
    ] || [],

    links: {
        repo: {
            type: String
        },
        live: {
            type: String
        }
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Project', projectSchema);