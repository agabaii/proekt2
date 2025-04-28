const express = require('express');
const { Note } = require('../models');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.create({ title, content, UserId: req.user.id });
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', authMiddleware, async (req, res) => {
  const notes = await Note.findAll({ where: { UserId: req.user.id } });
  res.json(notes);
});

module.exports = router;