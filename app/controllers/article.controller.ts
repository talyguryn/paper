import { Request, Response } from 'express';
import { Database } from "../models/database";

const Articles = new Database('articles');

export class Article {

  /**
   * Renders page with article by id or 404
   *
   * @param {e.Request} req
   * @param {e.Response} res
   */
  static async show(req: Request, res: Response) {
    let { id } = req.params;

    const articles = await Articles.find({_id: id});

    // res.send(JSON.stringify(articles[0].blocks));

    res.render('index', {
      editorData: {
        blocks: articles[0].blocks
      }
    });
  }

  /**
   * POST handler for saving an article
   *
   * @param {e.Request} req
   * @param {e.Response} res
   */
  static async save(req: Request, res: Response) {
    // res.send(`Saving the article`);

    console.log('req.headers', req.headers);

    console.log('req.body', req.body);

    const savedArticle = await Articles.insert(req.body);

    console.log('savedArticle', savedArticle);

    // console.log('Articles.find', await Articles.find({}));

    let response = {
      id: savedArticle._id, //Math.random().toString(36).substr(2, 9),
      savedData: savedArticle
    };

    // let response = req.body;

    res.json(response);
  }
}
