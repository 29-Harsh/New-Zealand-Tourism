const express = require("express");
const mysql = require('mysql');

const app = express();
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(express.static("files"));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nzdb',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Db Connection Succeed");
    }
    else {
        console.log("Db connect Failed \n Error :" + JSON.stringify(err, undefined, 2));
    }
});

app.post('/', function (req, res) { });

app.post("/api/image", (req, res) => {
    const img = req.body.imgName;
    mysqlConnection.query('INSERT INTO imagetb(pic) VALUES(?)', [img], (err, result) => {
        if (!err)
            res.send(result);
        else
            console.log(err);

    });
});

app.get('/api/showallimages', (req, res) => {
    mysqlConnection.query('SELECT * FROM imagetb', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

app.listen(3001, () => {
    console.log("Server Running On 3000");
});
