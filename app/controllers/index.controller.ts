import { Request, Response } from 'express';

export class Index {

  /**
   * Renders Index page with the CodeX Editor
   *
   * @param {e.Request} req
   * @param {e.Response} res
   */
  static show(req: Request, res: Response) {
    res.render('index', {title: 'Node'});
  }
}
