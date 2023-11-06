// const http = require("http");

const expres = require("express");

const app = expres();

app.use((req, res, next) => {
  console.log("Hello using the first middleware");
  next();
});

app.use((req, res, next) => {
  console.log("Hello using the Second middleware");
  res.send('<h1>Hello World!</h1>')
});

app.listen(3000);

// const routes = require("./routes");

// const server = http.createServer(routes.handler);

// server.listen(4000);
