"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Index = /** @class */ (function () {
    function Index() {
    }
    /**
     * Renders Index page with the CodeX Editor
     *
     * @param {e.Request} req
     * @param {e.Response} res
     */
    Index.show = function (req, res) {
        res.render('index', { title: 'Node' });
    };
    return Index;
}());
exports.Index = Index;
