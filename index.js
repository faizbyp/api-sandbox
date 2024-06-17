const express = require("express");
const app = express();
const PORT = 8080;

// MIDDLEWARE TO PARSE JSON AUTOMATICALLY
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Selamat datang di API");
});

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "Uniqlo Airism",
    size: "large",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "Logo is a must!" });
  }

  res.send({
    tshirt: `Tshirt with logo ${logo} and id: ${id}`,
  });
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
