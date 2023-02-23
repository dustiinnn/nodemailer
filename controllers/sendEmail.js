const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const transporter = await nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: "dustinnjoe23@outlook.com",
      pass: "?P8tsaJxY*A7*6=",
    },
  });

  const options = {
    from: "dustinnjoe23@outlook.com",
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
//stelah register sukses, auto kirim email thanks for register!