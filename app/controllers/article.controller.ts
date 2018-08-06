import { Request, Response } from 'express';

export class Article {

  /**
   * Renders page with article by id or 404
   *
   * @param {e.Request} req
   * @param {e.Response} res
   */
  static show(req: Request, res: Response) {
    let { id } = req.params;

    res.send(`Article #${id}`);
  }

  /**
   * POST handler for saving an article
   *
   * @param {e.Request} req
   * @param {e.Response} res
   */
  static save(req: Request, res: Response) {
    // res.send(`Saving the article`);
    // res.json(req.body);

    let response = {
      id: Math.random().toString(36).substr(2, 9),
    }

    res.json(response);
  }
}
