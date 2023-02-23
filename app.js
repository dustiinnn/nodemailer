const express = require("express");
const app = express();

const sendEmail = require("./controllers/sendEmail");

const port = 8000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("I am a server");
});

app.get("/mail", sendEmail);
