const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tt2176482@gmail.com', 
      pass: 'sxnc gwyw vzkb wltk', 
    },
  });


  const mailOptions = {
    from: 'tt2176482@gmail.com',
    to: email, 
    subject: `Hello, ${name}!`,
    text: `Hi ${name},\n\nThank you for reaching out to CÔTIER HOUSE! We're thrilled that you've decided to keep in touch.\n\nWe will keep you updated with the latest real estate opportunities, market trends, and exclusive listings.\n\nIf you have any questions or need assistance, feel free to reply to this email or give us a call.\n\nBest regards,\nThe CÔTIER HOUSE Team`,
    html: `
    <p>Hi <strong>${name}</strong>,</p>
    <p>Thank you for reaching out to <strong>CÔTIER HOUSE</strong>! We're thrilled that you've decided to keep in touch.</p>
    <p>We will keep you updated with the latest real estate opportunities, market trends, and exclusive listings.</p>
    <p>If you have any questions or need assistance, feel free to reply to this email or give us a call.</p>
    <p>Best regards,<br/><strong>The CÔTIER HOUSE Team</strong></p>
  `
    };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
