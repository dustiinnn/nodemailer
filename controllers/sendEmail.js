const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const transporter = await nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: "testing@outlook.com",
      pass: "yourOwnPass",
    },
  });

  const options = {
    from: "testing@outlook.com",
    to: ["name@gmail.com"],
    subject: "Sending email with node.js",
    text: "email send success!",
  };

  transporter.sendMail(await options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("sent:" + info.response);
  });
};

module.exports = sendEmail;
