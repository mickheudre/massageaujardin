const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    const { body } = req;

    if (body === undefined ||
      body.prenom === undefined ||
      body.nom === undefined ||
      body.contact === undefined ||
      body.message === undefined) {
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
      let message = `<h1>Nouveau message de la part de ${body.prenom} ${body.nom}</h1>
      <p>Contact ${body.contact}</p>
      <p>${body.message}</p>`;

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: process.env.FORM_EMAIL, // sender address
        to: process.env.FORM_CONTACT, // list of receivers
        subject: `Nouveau message de la part de ${body.prenom} ${body.nom}`, // Subject line
        text: message, // plain text body
        html: message, // html body
      });

    return res.status(200).send("Success");
}
