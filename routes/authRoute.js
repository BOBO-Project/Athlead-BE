const routes = require("express").Router();

/* CONTROLLERS */
const { UserController } = require("../controllers");

routes.post("/auth/register", UserController.register)
routes.post("/auth/login", UserController.login)
routes.post("/auth/checkAuth", UserController.checkAuth)

module.exports = routes;