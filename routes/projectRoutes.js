const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const auth = require('../middleware/authMiddleware');

// Create project
router.post('/', auth, async (req, res) => {
  const project = new Project({ ...req.body, user: req.user });
  await project.save();
  res.json(project);
});

// Get all projects
router.get('/', async (req, res) => {
  const projects = await Project.find().populate('user', 'name');
  res.json(projects);
});

// Like project
router.post('/like/:id', auth, async (req, res) => {
  const project = await Project.findById(req.params.id);
  project.likes.push(req.user);
  await project.save();
  res.json({ msg: "Liked" });
});

// Comment
router.post('/comment/:id', auth, async (req, res) => {
  const project = await Project.findById(req.params.id);
  project.comments.push({ user: req.user, text: req.body.text });
  await project.save();
  res.json(project);
});

module.exports = router;
