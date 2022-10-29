const routes = require("express").Router();

//Routes

const authRoute = require("./authRoute");
const emailRoute = require("./emailRoutes");

routes.use("/auth", authRoute);
routes.use("/email", emailRoute);

module.exports = routes;
