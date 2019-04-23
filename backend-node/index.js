const express = require("express");
const cors = require("cors");
const config = require("config");
const auth = require("./routes/auth");

const app = express();

/*
  add middlewares
 */
app.use(express.json());
app.use(cors());

/*
  add routes
 */
app.use("/api/auth", auth);

const PORT = config.get("PORT");
const server = app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});

module.exports = server;
