// const http = require("http");

const express = require("express");
const body = require("body-parser");

const app = express();

app.use(body.urlencoded({extended:false}));

app.use('/add-product',(req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button>Add product</button></form>')
});

app.post('/product',(req,res,next)=>{
  console.log(req.body);
  res.redirect("/")
})
app.use('/',(req, res, next) => {
  res.send('<h1>Hello World!</h1>')
});

app.listen(3000);

// const routes = require("./routes");

// const server = http.createServer(routes.handler);

// server.listen(4000);
