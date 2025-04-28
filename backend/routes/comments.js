const express = require('express');
const { Comment, User } = require('../models');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { text } = req.body;
    const comment = await Comment.create({ text, UserId: req.user.id });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const comments = await Comment.findAll({ include: User });
  res.json(comments);
});

module.exports = router;