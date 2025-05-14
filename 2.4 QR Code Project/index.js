/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image'

inquirer
  .prompt([
    // takes question and saves answer in ulr and in object answer
    {message : "What is the URL?", 
     name : "URL"
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    let qr_png = qr.image(url); 
    qr_png.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile("message.txt", "Hello from nodeJS. I am writing here", (err) => {
        if(err) throw err; 
        console.log("File has been saved");
    });
 })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error);
    } else {
      // Something else went wrong
      console.log("Something went wrong");
    }
  });
