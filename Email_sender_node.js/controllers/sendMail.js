const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: 'jerod.rosenbaum49@ethereal.email',
      pass: 'b7mwmkfVWyNKHfxdBd'
    },
  });

  let info = await transporter.sendMail({
    from: '"Mohd Faizan👻" <faizan@ethereal.email>', // sender address
    to: "fk873860@gmail.com", // list of receivers
    subject: "Request for sick leave", // Subject line
    text: "Suffering for fever need holiday. Hope you understand", // plain text body
    html: "<b>This is html content</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;
