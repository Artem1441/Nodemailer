import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config()

const email = process.env.EMAIL
const password = process.env.PASSWORD

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: email,
        pass: password
    },
}, {
    from: `Theme of Letter <${email}>`
})

const mailer = (message: object) => {
    transporter.sendMail(message, (err: any, info: any) => {
        if (err) return console.log(err)
        console.log("Email sent: ", info)
    })
}

export default mailer