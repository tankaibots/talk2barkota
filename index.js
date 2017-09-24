'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const restService = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var Promise = require('promise');
var MongoClient = require('mongodb').MongoClient;

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.post('/webhook', function(req, res) {

});

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});