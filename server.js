const express = require('express');
const connect = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api/auth', require('./routes/authentication/userAuth'));
app.use('/api/users', require('./routes/profile/profile'));
app.use('/api/projects', require('./routes/projects/projects'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    connect();
});