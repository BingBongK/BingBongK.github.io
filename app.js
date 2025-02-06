//const path = require ('path');
//const fileURLToPath = path.resolve(__dirname, 'index.html');
//res.sendFile(fileURLToPath);

const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  auth: {
    user: 'yuanbingkhoo@gmail.com',
    pass: 'uxps hlhg hfpj oemz',
  }
});


app.post('/send-email', async (req, res) => {
// Send email using defined transporter object
try{
const{ email, kisses, hugs, cuddles, extra} = req.body;
console.log(email);
var mailOptions = {
  from: 'yuanbingkhoo@gmail.com',
  to: email,
  cc: 'yuanbingkhoo@hotmail.co.uk',
  subject: 'Valentines Plans',
  text: `You are entitled to: ${kisses || 'No Kisses'}, ${hugs || 'No Hugs'}, ${cuddles || 'No Cuddles'}  \n And you have also asked for: ${extra || 'No Extra Details'} \n`,
};

await transporter.sendMail(mailOptions)
   res.status(200).json({ message: 'Email sent successfully!' });
console.log('Email sent:')
} catch (error) {
    console.log( "Email not working");

  res.status(500).json({ error: error.message });
    console.log(error);
}
});
//start server
app.listen(8080, () => {
    console.log("Server successfully running on port 8080");
  });

