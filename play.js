// const http = require("http");

const express = require("express");
const body = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(body.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("Page not found!!");
});

app.listen(3000);

// const routes = require("./routes");

// const server = http.createServer(routes.handler);

// server.listen(4000);
