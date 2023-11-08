const path = require("path");

const routeDir = require("../utils/path");

exports.getProducts = (req, res) => {
  res.sendFile(path.join(routeDir, "views", "shop.html"));
};
