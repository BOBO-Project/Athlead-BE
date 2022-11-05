const { Partners } = require("../models");

const {
  verifyPassword,
  hashPassword,
  encodeToken,
  verifyToken,
} = require("../helpers");

class PartnerController {
  static async getPartners(req, res, next) {
    try {
      const partners = await Partners.findAll({
        order: [["createdAt", "DESC"]],
      });
      return res.status(200).json({
        message: "Success get all partners",
        data: partners || [],
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message || failed,
      });
    }
  }

  static async registerPartners(req, res, next) {
    try {
      const {
        category,
        venueName,
        academyName,
        sportsDetail,
        sportsSpecification,
        name,
        phone,
        email,
        website,
        status = false,
      } = req.body;

      if (!category) throw { message: "Category is required field" };

      if (category === "Venue") {
        if (!venueName)
          throw { message: "Venue name is required on category venue" };
        if (!sportsDetail)
          throw { message: "Sports detail is required on category venue" };
      }

      if (category === "Coach") {
        if (!sportsSpecification)
          throw {
            message: "Sport specification is required on category coach",
          };
      }

      if (category === "Academy") {
        if (!academyName)
          throw { message: "Academy name is required on category academy" };
        if (!sportsDetail)
          throw { message: "Sports detail is required on category academy" };
      }

      await Partners.create({
        category,
        venueName,
        academyName,
        sportsDetail,
        sportsSpecification,
        name,
        phone,
        email,
        website,
        status,
      });

      return res.status(200).json({
        message: "Successfully register partners",
        data: {
          category,
          venueName,
          academyName,
          sportsDetail,
          sportsSpecification,
          name,
          phone,
          email,
          website,
          status,
        },
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message || "Failed register partners",
      });
    }
  }

  static async changeStatusPartner(req, res, next) {
    try {
      const { partnerId } = req.params;
      const { status } = req.body;

      await Partners.update({ status }, { where: { id: partnerId } });
      return res.status(200).json({
        message: "Success update partner status",
      });
    } catch (error) {
      return res.status(400).json({
        message: "Failed update partner status",
      });
    }
  }

  static async deletePartner(req, res, next) {
    try {
      const { partnerId } = req.params;
      await Partners.destroy({ where: { id: partnerId } });
      return res.status(200).json({
        message: "Success deleting partner",
      });
    } catch (error) {
      return res.status(400).json({
        message: "Failed deleting partner",
      });
    }
  }
}

module.exports = PartnerController;
