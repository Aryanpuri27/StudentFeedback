const express = require("express")
const app = express()
const port = 8000
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
app.set("view engine", "ejs");

app.get("/", (req, res) => {

    res.status(200).render("first")
})
app.post("/form", (req, res) => {
    console.log(req.body)

    const data = {
        "studentName": req.body.studentName,
        "studentEmail": req.body.studentEmail,
        "registrationNumber": req.body.registrationNumber
    }
    res.cookie("studentData", data)
    res.status(200).render("index")
})
app.post("/end", (req, res) => {

    const studentData = req.cookies.studentData
    const formResponce = req.body
    console.log(studentData, formResponce)

    res.status(200).render("end")
})



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});