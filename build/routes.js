"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("./controllers");
// import multer from 'multer';
// const upload = multer();
exports.router = express_1.Router();
/**
 * Wrapper for router's callbacks
 * @param {(req: e.Request, res: e.Response, next: e.NextFunction) => Promise<void | Error>} func
 * @return {(req: e.Request, res: e.Response, next: e.NextFunction) => void}
 */
var _ = function (func) { return function (req, res, next) {
    func(req, res, next)
        .then(function () { return next; })
        .catch(function (err) { return next(err); });
}; };
/**
 * List of available routes
 */
exports.router.get('/', _(controllers_1.Index.show));
exports.router.post('/', _(controllers_1.Article.save));
exports.router.get('/:id', _(controllers_1.Article.show));
