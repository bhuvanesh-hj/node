const path = require("path");

const routerDir = require("../utils/path");

exports.successPage = (req, res) => {
  res.sendFile(path.join(routerDir, "views", "success.html"));
};
