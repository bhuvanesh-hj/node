const path = require("path");

const routeDir = require("../utils/path");

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(routeDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop");
};
