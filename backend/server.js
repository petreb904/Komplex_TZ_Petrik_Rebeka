const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
const mysql = require('mysql')
 
const db = mysql.createConnection({
    host: "localhost",
    port: 3307,
    database: "",
    user: "root",
    password: ""
});
 
 
 
app.listen(3001, () => {
  console.log(`Example app listening on port 3001`)
})