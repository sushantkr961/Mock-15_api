const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);
require("./db/connection");

app.get("/", (req, res) => {
  try {
    res.json("Get form home");
  } catch (error) {
    res.json(error);
  }
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
