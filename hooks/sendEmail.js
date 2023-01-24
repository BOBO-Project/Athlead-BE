const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = ({ to, subject, content }) => {
  const mailOption = {
    to: to,
    from: "no-reply@athlead.id",
    subject: subject,
    html: content,
  };

  sgMail
    .send(mailOption)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error.response.body);
    });
};

module.exports = sendEmail;
