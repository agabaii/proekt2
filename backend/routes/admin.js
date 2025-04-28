const express = require('express');
const { User, Note, Comment } = require('../models');
const adminMiddleware = require('../middlewares/admin');
const router = express.Router();

router.use(adminMiddleware); // Только для админов

router.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.delete('/notes/:id', async (req, res) => {
  await Note.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Заметка удалена' });
});

module.exports = router;