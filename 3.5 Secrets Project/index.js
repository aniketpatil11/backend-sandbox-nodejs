//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express"; 
import { dirname } from "path"; 
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url))
let accessToSecret = false;
// Middleware: 

app.use(express.urlencoded({ extended: true }));

function checkPassowrd(req, res, next){
    const password = req.body["password"];
    if (password === "iLoveProgramming") {
        accessToSecret = true; 
    }
    next();
}

app.use(checkPassowrd);


app.get("/", (req, res) => {
    console.log("Dirname and FileURLToPath below");
// dirname: extracts the directory path from a full file path
    console.log(dirname);
// fileURLToPath: converts import.meta.url (a file URL) into a local file path   
    console.log(fileURLToPath(import.meta.url));
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    console.log(req.body);
    if (accessToSecret){
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect("/");
    }
    
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
}) 