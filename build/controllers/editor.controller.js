"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (req, res) {
    res.render('index', { title: 'Node' });
    // res.send('Hello, World!');
});
router.post('/', function (req, res) {
    res.json(req.body);
    // res.send('Article was saved!');
});
exports.EditorController = router;
