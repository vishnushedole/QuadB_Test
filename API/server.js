const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const Router = require('./Routes/User.js');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST","FETCH"],
    credentials:true
}));
app.use('/',Router);

app.listen(8080);