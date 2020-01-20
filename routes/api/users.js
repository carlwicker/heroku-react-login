const express = require("express");
const router = express.Router();

// User Model
const User = require("../../models/User");

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
  console.log(user);
});

router.get("/", (req, res) => {
  res.json({ success: true });
});

module.exports = router;
