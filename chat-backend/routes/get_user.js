const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get("/finduser", async (req, res) => {
  try {
    const { username } = req.query;
    
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: "User doesn't exist" });
    }

    res.json({
      recepient: {
        _id: user._id,
        name: user.username,
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
