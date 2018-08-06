"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("./controllers");
var multer_1 = __importDefault(require("multer"));
var upload = multer_1.default();
exports.router = express_1.Router();
exports.router.get('/', controllers_1.Index.show);
exports.router.post('/', upload.any(), controllers_1.Article.save);
exports.router.get('/:id', controllers_1.Article.show);
