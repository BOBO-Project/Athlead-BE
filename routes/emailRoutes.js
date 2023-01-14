const routes = require("express").Router();

const { EmailController, UserController } = require("../controllers");

routes.post("/", EmailController.addEmail);
routes.get("/", UserController.checkAuth, EmailController.getEmail);
routes.post("/blast", UserController.checkAuth, EmailController.blastEmail);
routes.post("/upload", UserController.checkAuth, EmailController.upload);
routes.post("/reset", UserController.checkAuth, EmailController.reset);

module.exports = routes;
