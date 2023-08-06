const nodemailer = require("nodemailer");
const htmlToText = require("html-to-text");

exports.sendMail = async (data) => {
  try {
    const transporter = await nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports not 587
      auth: {
        user: process.env.STAMP_MAIL,
        pass: process.env.STAMP_PASSWORD,
      },
    });

    // send mail with defined transport object
    const options = {
      from: data.from, // sender address
      to: data.to, // list of receivers
      subject: data.subject, // Subject line
      // text: htmlToText.fromString(data.html), // plain text body
      html: data.html, // html body
    };

    try {
      console.warn("try");
      const info = await transporter.sendMail(options);
      // console.log('info :>> ', info);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (error) {
      console.log("error :>> ", error);
    }
  } catch (error) {
    console.warn("error", error);
  }
};
