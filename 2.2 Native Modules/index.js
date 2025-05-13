const fs = require('fs');

// Creates file in system
// fs.writeFile("message.txt", "Hello from nodeJS. I am writing here", (err) => {
//     if(err) throw err; 
//     console.log("File has been saved");
// });

// Readfile challenge
fs.readFile("./message.txt", "utf-8", (err, data) => {
    if (err) throw err; 
    console.log(data);
});

console.log("Hello world");