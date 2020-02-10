const express = require("express");
const router = express.Router();

// User Model
const User = require("../../models/User");

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get("/", (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then(users => res.json(users));
});

// @route   POST api/users
// @desc    Post users
// @access  Public
router.post("/", (req, res) => {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  });
  user.save().then(user => res.json(user));
});

module.exports = router;

router.delete("/:_id", (req, res) => {
  console.log(req.params._id);
  User.findById(req.params._id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// Get One
router.get("/:_id", (req, res) => {
  User.findById(req.params._id).then(user => res.json(user));
});
