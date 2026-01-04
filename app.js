// GET, POST, PUT, DELETE

const expess = require("express");

const app = expess();

app.use(expess.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello Temur!");
  // res - sorov
  // req - javob
});

app.post("/", (req, res) => {
  const { firstName, lastName } = req.body;
  console.log(req.body);
  const messege = `His full name - ${firstName} ${lastName}`;
  res.send(messege);
  // res - sorov
  // req - javob
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(id);
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({ id, body });
});

const PORT = 8080;

app.listen(PORT, () => console.log(`Listening on - http://localhost:${PORT}`));
