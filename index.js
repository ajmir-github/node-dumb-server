const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const relativePath = (p) => path.join(__dirname, p);

dotenv.config(relativePath(".env"));
const app = express();
const { PORT, SECRET_KEY } = process.env;

app.use(express.static(relativePath("public")));

app.get("/env", (req, res) => {
  res.send({ SECRET_KEY });
});

app.listen(PORT, () => console.log("Server is listening on port: " + PORT));
