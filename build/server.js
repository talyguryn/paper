"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var config_1 = require("./config");
var routes_1 = require("./routes");
var controllers_1 = require("./controllers");
/**
 * Create a new express application instance
 */
var app = express_1.default();
/**
 * Parse POST data
 */
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
/**
 * Parse cookies
 */
app.use(cookie_parser_1.default());
/**
 * Set up templater
 */
app.set('view engine', 'pug');
app.set('views', path_1.default.join(__dirname, '../views'));
/**
 * Set up routes
 */
app.use('/public', express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use(routes_1.router);
app.use(controllers_1.ErrorHandler);
/**
 * Serve the application at the given port
 */
app.listen(config_1.port, function () {
    console.log("Listening at http://localhost:" + config_1.port + "/");
});
