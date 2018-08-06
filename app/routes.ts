import { Router } from 'express';
import { Article, Index } from "./controllers";
import multer from 'multer';
const upload = multer();

export const router: Router = Router();

router.get('/', Index.show);
router.post('/', upload.any(), Article.save);
router.get('/:id', Article.show);
