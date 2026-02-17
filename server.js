const express = require('express');
const connect = require('./config/db');
const { auth } = require('./validators/auth')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// routes
app.use('/api/auth', require('./routes/authentication/userAuth'));
app.use('/api/users', auth, require('./routes/profile/profile'));
app.use('/api/projects', auth, require('./routes/projects/projects'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    connect();
});