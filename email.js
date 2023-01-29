var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mckypataradanaisg@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'mckypataradanaisg@gmail.com',
  to: '6338136621@student.chula.ac.th',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

//source https://www.w3schools.com/nodejs/nodejs_email.asp