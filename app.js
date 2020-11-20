const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser);
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, function() {console.log(`Server listing on port ${PORT}.`)});