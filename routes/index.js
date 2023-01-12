const routes = require("express").Router();

const { route } = require("./authRoute");
//Routes

const authRoute = require("./authRoute");
const emailRoute = require("./emailRoutes");
const partnerRoute = require("./partnerRoutes");

routes.use("/auth",authRoute);
routes.use("/email",emailRoute);
routes.use("/partners",partnerRoute);

module.exports = routes;
