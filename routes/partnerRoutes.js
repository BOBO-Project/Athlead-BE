const { UserController } = require("../controllers");
const PartnerController = require("../controllers/partnerController");

const routes = require("express").Router();

routes.get("/partners", UserController.checkAuth, PartnerController.getPartners);
routes.post("/partners", PartnerController.registerPartners);
routes.put(
  "/partners/:partnerId",
  UserController.checkAuth,
  PartnerController.changeStatusPartner
);
routes.delete(
  "/partners/:partnerId",
  UserController.checkAuth,
  PartnerController.deletePartner
);

module.exports = routes;
