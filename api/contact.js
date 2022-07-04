const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    const { body } = req;

    if (body === undefined || body.name === undefined) {
        return res.status(502).send("Invalid Request");
    }
    let transporter = nodemailer.createTransport({
        host: 'ssl0.ovh.net',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.FORM_EMAIL, // generated ethereal user
          pass: process.env.FORM_PASSWORD, // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: process.env.FORM_EMAIL, // sender address
        to: process.env.FORM_CONTACT, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: `Hello ${body.name}`, // plain text body
        html: `<b>Hello ${body.name}</b>`, // html body
      });

    return res.status(200).send("Success");
}
