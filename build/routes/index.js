"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
exports.router = express_1.Router();
// router.get('/', (req: Request, res: Response) => {
//   res.render('index', {title: 'Node'});
//   // res.send('Hello, World!');
// });
//
// router.post('/', (req: Request, res: Response) => {
//   res.json(req.body);
//   // res.send('Article was saved!');
// });
exports.router.get('/', function (req, res) {
    res.render('index', { title: 'Node' });
    // res.send('Hello, World!');
});
exports.router.get('/:id', controllers_1.Article.show);
