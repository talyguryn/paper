import { Request, Response, NextFunction } from 'express';

export const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  res.status(500).json(err);

  // res.status(500).send('500 Internal server error');
};
