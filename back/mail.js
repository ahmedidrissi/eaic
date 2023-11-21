const nodemailer = require("nodemailer");
require("dotenv/config");

const email = process.env.EAIC_EMAIL;
const password = process.env.EAIC_PASSWORD;

const transport = nodemailer.createTransport({
  port: 587,
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: email,
    pass: password,
  },
  secure: true,
});

exports.sendContactEmail = ({ name, to, message }) => {
  const mailOptionsToOwner = {
    to: email,
    subject: `Contact Form Submission from ${name} <${to}>`,
    text: message,
  };

  const mailOptionsToUser = {
    from: email,
    to: to,
    subject: "Thanks for contacting us!",
    text: "We will get back to you soon!",
  };

  return Promise.all([
    transport.sendMail(mailOptionsToOwner),
    transport.sendMail(mailOptionsToUser),
  ]);
};
