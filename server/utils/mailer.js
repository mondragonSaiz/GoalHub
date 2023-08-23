// const nodemailer = require('nodemailer');

// // Create a transporter object with your email service settings
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',  // Use your email service (e.g., 'Gmail', 'Outlook', etc.)
//   auth: {
//     user: 'your_email@gmail.com',
//     pass: 'your_email_password',
//   },
// });

// // Function to send an email
// const sendEmail = async (to, subject, htmlContent) => {
//   const mailOptions = {
//     from: 'your_email@gmail.com',
//     to,
//     subject,
//     html: htmlContent,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log(`Email sent to ${to}`);
//   } catch (error) {
//     console.error(`Email sending failed: ${error}`);
//   }
// };

// module.exports = { sendEmail };