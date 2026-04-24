const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/authMiddleware');

// Get profile
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  res.json(user);
});

// Follow user
router.post('/follow/:id', auth, async (req, res) => {
  const user = await User.findById(req.params.id);
  user.followers.push(req.user);
  await user.save();
  res.json({ msg: "Followed" });
});

module.exports = router;
