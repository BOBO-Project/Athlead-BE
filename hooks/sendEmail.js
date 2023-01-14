const nodemailer = require("nodemailer");

const sendEmail = ({ to, subject, content }) => {
  const transporter = nodemailer.createTransport({
    // service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    pool: true, // This is the field you need to add
    auth: {
      user: "Notification.athlead@gmail.com",
      pass: "lbuepjuwqtiovygl",
    },
  });

  const mailOption = {
    from: "Notification.athlead@gmail.com",
    to: to,
    subject: subject,
    html: content,
  };

  transporter.sendMail(mailOption, function (err, info) {
    if (err) {
      console.log(err, "<< err");
      transporter.close();

      return err;
    } else {
      console.log(info, "<< info");
      transporter.close();

      return info;
    }
  });
};

module.exports = sendEmail;
