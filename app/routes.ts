import { Router, Request, Response, NextFunction } from 'express';
import { Article, Index } from "./controllers";
// import multer from 'multer';
// const upload = multer();

export const router: Router = Router();

/**
 * Wrapper for router's callbacks
 * @param {(req: e.Request, res: e.Response, next: e.NextFunction) => Promise<void | Error>} func
 * @return {(req: e.Request, res: e.Response, next: e.NextFunction) => void}
 */
const _ = (func: (req: Request, res: Response, next: NextFunction) => Promise<void|Error>) => (req: Request, res: Response, next: NextFunction) => {
  func(req, res, next)
    .then(() => next)
    .catch((err: Error) => next(err));
};

/**
 * List of available routes
 */
router.get('/', _(Index.show));
router.post('/', _(Article.save));
router.get('/:id', _(Article.show));
