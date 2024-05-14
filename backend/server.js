const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database:"signup"
})
app.post('/signup', (req, res) => {
    if (!req.body || !req.body.name || !req.body.email || !req.body.password) {
        // If request body or required properties are missing, return an error response
        return res.status(400).json({ error: 'Invalid request. Name, email, and password are required.' });
    }

    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    console.log('Received Signup Request:', req.body); // Log the request body

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Signup Error:', err); // Log the error
            return res.status(500).json({ error: 'An error occurred while signing up.' });
        }
        console.log('Signup Success:', data); // Log the success response
        return res.status(200).json({ message: 'Signup successful.' });
    });
});

app.post('/login',(req,res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ? ";
    
    db.query(sql,[req.body.email,req.body.password], (err, data) => {
        if(err){
            return res.json("Error")
        }
       if(data.length > 0) {
        return res.json("Success")
       }else{
        return res.json("Failed")
       }
    })
})
// const port = 8081;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);

app.listen(8081, ()=> {
    console.log("listening  ");
})