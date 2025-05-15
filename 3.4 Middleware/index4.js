import express from "express";
import { dirname } from "path"; 
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let brandName = ""

app.use(express.urlencoded({ extended: true }));

// Define the middleware:
function bradNameGenerator(req, res, next){
  console.log(req.body);
  brandName = req.body["street"] + req.body["pet"]; 
  next();
}

// Use the middleware:
app.use(bradNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>The brand name is: </h1> </br> <h3> ${brandName} </h3>`);
  //res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
