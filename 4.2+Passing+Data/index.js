import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { letterLength: undefined });
});

app.post("/submit", (req, res) => {
  let firstNameLen = req.body["fName"].length;
  let lastNameLen = req.body["lName"].length;
  console.log(`fName : ${firstNameLen}, lName: ${lastNameLen}`);
  let total = firstNameLen + lastNameLen;
  res.render("index.ejs", { letterLength: total });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
