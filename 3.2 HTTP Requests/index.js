import express from "express"; 
const app = express();
const port = 3000; 

app.get('/', (req, res) =>{
  console.log(req.rawHeaders);
  res.send("Hello Programming");
});

app.get('/about', (req, res) =>{
  res.send("<h1> This is about page</h1>");
});

app.get('/contact', (req, res) =>{
  res.send("<h1>Contact US</h1><p> Reach out via facebook, instagram, email, contact </p>");
})

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});