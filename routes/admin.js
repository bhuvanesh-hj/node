const express = require("express");

const routes = express.Router();

routes.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="number" name="size"><button>Add product</button></form>'
  );
});

routes.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = routes;
