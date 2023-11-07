// const http = require("http");

const express = require("express");
const body = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactus = require("./routes/contactus");
const success = require("./routes/success");

const routeDir = require("./utils/path");

const app = express();

app.use(body.urlencoded({ extended: false }));
app.use(express.static(path.join(routeDir, "public")));

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);
app.use(contactus);
app.use(success);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(routeDir, "views", "404.html"));
});

app.listen(3000);

// const routes = require("./routes");

// const server = http.createServer(routes.handler);

// server.listen(4000);
