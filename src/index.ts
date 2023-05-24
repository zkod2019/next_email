import fs from 'fs';
import { hey } from './helper.js';
import nodemailer from 'nodemailer';

console.log(hey);
fs;

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
  auth: {
    user: 'my@gmail.com',
    pass: 'password',
  },
});

const mailOptions = {
  from: 'my@gmail.com',
  to: 'your@gmail.com',
  subject: 'Hello',
  text: 'Test email',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});

// https://nodemailer.com/about/ source 
