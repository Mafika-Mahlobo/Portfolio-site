const mongoose = require('mongoose');
const config = require('config');

const Dbconnect = async () => {
    mongoose.connect(config.get('mongoConnection'))
    .then(() => {
        console.log('Database connected!')
    }).catch(() => {
        console.log('Error: Could not connecte to the Database')
    });
}

module.exports = Dbconnect;
