import express from "express";
import bodyParser from "body-parser";
import mailer from "./nodemailer";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/registration", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
app.post("/registration", (req, res) => {
    const { email, password } = req.body
    const message = {
        to: email, // "bar@example.com, baz@example.com" - it can be more than one email
        subject: "Registration completed successfully!",
        text: `It's cool. You can use our services with other users!
        login: ${email},
        password: ${password}
        `,
        // or html
        // html: "<b>Here is the html code!</b>",
    }

    if (!email || !password) res.status(400)

    mailer(message)
    res.redirect("/registration")
})

app.listen(3000, () => {
    console.log("Server is running on 3000 port")
});