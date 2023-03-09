import nodemailer from "nodemailer";
import path from "path";

const sendFunc = async (options) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "kacynthian@gmail.com",
      pass: "zsjjbfwuzqyeiyiw",
    },
  });
  let mailOptions = {
    from: "kacynthian@gmail.com",
    to: options?.userEmails,
    subject: `Welcome to KAYITARE Blog`,
    html: ` has published a new blog. has been created with ${options.blogMainTitle} title the author is ${options.blogAuthor}`,
    // attachments: [
    //   {
    //     filename: "challenge.pdf",
    //     path: path.join(__dirname, `../output/challenge.pdf`),
    //     contentType: "application/pdf",
    //   },
    // ],
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });
};
export default sendFunc;
