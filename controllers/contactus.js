const path = require("path");

const routerDir = require("../utils/path");

exports.contactUsPage = (req, res) => {
  res.sendFile(path.join(routerDir, "views", "contactus.html"));
};
