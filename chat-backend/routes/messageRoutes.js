// routes/messageRoutes.js
const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  console.log('POST body:', req.body);

  try {
    const newMessage = await Message.create(req.body);
    res.status(201).json(newMessage);
  } catch (err) {
    console.error('❌ Error creating message:', err);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const messages = (await Message.find().sort({ timestamp: 1 })).reverse();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

module.exports = router;
