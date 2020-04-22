const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const index = require('./routes/index');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', index);

app.listen('3000', function () {
    console.log(`Api funcionando corretamente! em http://localhost:3000`)
})