const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['https://localhost:4200'];

var corsOptionDelegate = (req, callback) => {
    
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    }
    else {
        callback(null, corsOptions);
    }
}


exports.cors = cors();
exports.corsWithOptions = cors(corsOptionDelegate);