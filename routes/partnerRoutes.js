const { UserController } = require("../controllers");
const PartnerController = require("../controllers/partnerController");

const routes = require("express").Router();

routes.get("/", UserController.checkAuth, PartnerController.getPartners);
routes.post("/", PartnerController.registerPartners);
routes.put(
  "/:partnerId",
  UserController.checkAuth,
  PartnerController.changeStatusPartner
);
routes.delete(
  "/:partnerId",
  UserController.checkAuth,
  PartnerController.deletePartner
);

module.exports = routes;
