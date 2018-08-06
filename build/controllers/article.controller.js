"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Article = /** @class */ (function () {
    function Article() {
    }
    /**
     * Renders page with article by id or 404
     *
     * @param {e.Request} req
     * @param {e.Response} res
     */
    Article.show = function (req, res) {
        var id = req.params.id;
        res.send("Article #" + id);
    };
    /**
     * POST handler for saving an article
     *
     * @param {e.Request} req
     * @param {e.Response} res
     */
    Article.save = function (req, res) {
        // res.send(`Saving the article`);
        // res.json(req.body);
        var response = {
            id: Math.random().toString(36).substr(2, 9),
        };
        res.json(response);
    };
    return Article;
}());
exports.Article = Article;
