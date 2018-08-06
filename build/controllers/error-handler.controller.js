"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('500 Internal server error');
};
