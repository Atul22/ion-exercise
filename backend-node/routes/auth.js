const express = require("express");
const users = require("../mock-data/users");
const auth = require("../utils/auth");
const router = express.Router();

const errorMessage = {
  success: false,
  errorMessage: "Invalid username/password"
};

const response = {
  success: true,
  errorMessage: null,
  jwt: null
};

/*
  post method to handle the incoming login request
  setTimeout of 3s added to make it async
  validates teh user
*/
router.post("/", async (req, res) => {
  setTimeout(() => {
    const { username, password } = req.body;
    const user = users.getUser(username);

    if (!user) return res.status(400).send(errorMessage);

    if (password !== user.password) return res.status(400).send(errorMessage);

    const jwt = auth.generateAuthKey(username);
    response.jwt = jwt;

    res.send(response);
  }, 3000);
});

module.exports = router;
