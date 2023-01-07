const routes = require("express").Router();

const { EmailController, UserController } = require("../controllers");

routes.post("/email", EmailController.addEmail);
routes.get("/email", UserController.checkAuth, EmailController.getEmail);
routes.post("/email/blast", UserController.checkAuth, EmailController.blastEmail);

module.exports = routes;
