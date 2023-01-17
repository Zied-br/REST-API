const express = require("express");
const router = express.Router();
const User = require("../models/User");
//RETURN ALL USERS
router.get("/getUsers", (req, res) => {
  User.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});
//ADD A NEW USER TO THE DATABASE
router.post("/addUser", (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});
//EDIT A USER BY ID
router.put("/user/updateUser/:userId", (req, res) => {
  User.findByIdAndUpdate(req.params.userId, req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});
//REMOVE A USER BY ID
router.delete("/user/deleteUser/:userId", (req, res) => {
  User.findByIdAndRemove(req.params.userId)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});
module.exports = router;
