const express = require('express');
const connect = require('./config/db');
const path =  require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// API Routes
app.use('/api/auth', require('./routes/authentication/userAuth'));
app.use('/api/users', require('./routes/profile/profile'));
app.use('/api/projects', require('./routes/projects/projects'));
app.use('/api/contact', require('./routes/mail/contact'));

// Server react app
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Redirect unknown url to home
app.use((req, res, next) => {

  if (req.path.startsWith("/api")) return next();
  if (path.extname(req.path)) return next();

  res.sendFile(path.join(path.join(__dirname, 'client', 'dist'), 'index.html'));
    
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    connect();
});