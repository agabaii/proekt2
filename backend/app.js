const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const path = require('path');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Разрешаем запросы с фронтенда
  credentials: true
}));
app.use(express.json());

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/comments', require('./routes/comments'));


// В продакшене: обслуживаем React статически
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });
}

// Database connection
sequelize.sync()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Error: ' + err));

module.exports = app;