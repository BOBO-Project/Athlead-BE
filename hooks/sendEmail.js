const nodemailer = require("nodemailer");

const sendEmail = ({ to, subject, content }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rzk.atech@gmail.com",
      pass: "riczdinngmuanooh",
    },
  });

  const mailOption = {
    from: "no-reply@athlead.id",
    to: to,
    subject: subject,
    html: content,
  };

  transporter.sendMail(mailOption, function (err, info) {
    if (err) {
      return err;
    } else {
      return info;
    }
  });
};

module.exports = sendEmail;
