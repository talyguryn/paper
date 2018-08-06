"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
var MongoDB = /** @class */ (function () {
    function MongoDB(dbname) {
        var db = MongoClient.connect(url)
            .then();
    }
    return MongoDB;
}());
