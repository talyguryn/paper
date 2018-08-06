import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { port } from './config';
import { router } from './routes';
import { ErrorHandler } from './controllers';

/**
 * Create a new express application instance
 */
const app: express.Application = express();

/**
 * Parse POST data
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Parse cookies
 */
app.use(cookieParser());

/**
 * Set up templater
 */
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));

/**
 * Set up routes
 */
app.use('/public', express.static(path.join(__dirname, '../public')));
app.use(router);
app.use(ErrorHandler);

/**
 * Serve the application at the given port
 */
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
