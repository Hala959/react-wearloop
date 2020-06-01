  
const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const isLoggedIn = require("../config/config");
require("dotenv").config();
router.get("/", async (req, res) => {
    try {
      let user = await User.find();
  
      if (!user) throw err;
  
      res.json({ user }).status(200);
    } catch (err) {
      res.json({ message: "No user" }).status(400);
    }
  });
  

  
router.get("/:id", async (req, res) => {
    try {
      let user = await User.findById(req.params.id);
  
      if (!user) throw err;
  
      res.json({ user }).status(200);
    } catch (err) {
      res.json({ message: "No user" }).status(400);
    }
  });
  
  // user/
  router.post("/registerTeacher", (req, res) => {
    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      major: req.body.major,
      education: req.body.education,
      userType: "teacher",
    };
    console.log();

    User.findOne({ email: newUser.email })
    .then((user) => {
      // if email not incloads the database
      if (!user) {
        bcrypt.hash(newUser.password, 10, (err, hash) => {
          newUser.password = hash;
          User.create(newUser).then(() =>
            res.json({ msg: "user created", userInf: newUser, register: true })
          );
        });
      } else {
        //if email have been used
        res.json({ msg: "email  used", register: false });
      }
    })
    .catch((err) => res.json(err));
});


// user/
router.post("/register", (req, res) => {
    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      userType: "",
    };
    console.log();
    // res.send(newUser);