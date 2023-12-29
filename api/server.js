const express = require("express")
const app = express();

const users = [
 {
  "name": "Ethan",
  "email": "etoung@cpp.edu",
  "number": "626-499-8741"
 },
 {
  "name": "Happy",
  "email": "happy@gmail.edu",
  "number": "626-499-8742"
 }
]

app.get("/", (req, rees) => {
 res.send("Hello, world!");
})

app.get("/users", (req, rees) => {
 res.json(users);
})

app.get("/users/:id", (req, rees) => {
 res.json(users[Number(req.params.id) - 1]);
})

app.use(express.json());
app.post("/stuff/", (req, res) => {
 users.push(req.body);
 res.json(users);
})

app.listen(9632);
