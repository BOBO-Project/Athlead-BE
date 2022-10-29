const { Email } = require("../models");
const sendEmail = require("../hooks/sendEmail");

class EmailController {
  static async addEmail(req, res, next) {
    try {
      const { email } = req.body;
      if (!email) throw { message: "Email must be Provided" };

      await Email.create({ email });
      return res.status(200).json({
        message: "Successfully add email",
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message || "Failed",
      });
    }
  }

  static async getEmail(req, res, next) {
    try {
      const emails = await Email.findAll();
      return res.status(200).json({
        message: "Success get all email",
        data: emails || [],
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message || failed,
      });
    }
  }

  static async blastEmail(req, res, next) {
    try {
      const { emailContent, emailSubject } = req.body;
      if (!emailContent && !emailSubject)
        throw { message: "Email content must be Provided" };

      const list = await Email.findAll();

      list.forEach((el) => {
        sendEmail({
          to: el.dataValues.email,
          subject: emailSubject,
          content: emailContent,
        });
      });

      return res.status(200).json({
        message: "Success",
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message || "Failed",
      });
    }
  }
}

module.exports = EmailController;
