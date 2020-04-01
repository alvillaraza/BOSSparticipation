const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); //npm install jsonwebtoken
const { jwtSecret } = require("../config/secrets.js");

const Users = require("../users/users_model.js");
const Employees = require("../employees/employees-model.js");

// for endpoints beginning with /api/auth
router.post("/register_employees", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Employees.insert(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(err => {
      res.status(500).json({ err: "couldn't add user" });
    });
});

router.post("/login/employees", (req, res) => {
  let { username, password } = req.body;

  Employees.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({ message: `Welcome ${user.username}!`, token });
      } else {
        res
          .status(401)
          .json({ message: "Please provide correct username and password" });
      }
    })
    .catch(error => {
      res.status(500).json({ error: "There was an error logging in " });
    });
});

//register and login for business owner

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  Users.insert(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user); //get a token

        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token //send the token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
    // role: user.role || 'user',
  };

  const options = {
    expiresIn: "2h"
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
