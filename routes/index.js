const routes = require("express").Router();

const { route } = require("./authRoute");
//Routes

const authRoute = require("./authRoute");
const emailRoute = require("./emailRoutes");
const partnerRoute = require("./partnerRoutes");

routes.use("/", authRoute);
routes.use("/", emailRoute);
routes.use("/", partnerRoute);

module.exports = routes;
