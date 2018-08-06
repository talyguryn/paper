"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
// // Assign router to the express.Router() instance
// const router: Router = Router();
//
// router.get('/:id', (req: Request, res: Response) => {
//     // Extract the id from the request parameters
//     let { id } = req.params;
//
//     // Greet the given id
//     res.send(`Article #${id}`);
// });
//
// export const ArticleController: Router = router;
var Article = /** @class */ (function () {
    function Article() {
    }
    Article.show = function (req, res) {
        var id = req.params.id;
        res.send("Article #" + id);
    };
    return Article;
}());
exports.Article = Article;
