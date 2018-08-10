"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nedb_1 = __importDefault(require("nedb"));
var path_1 = __importDefault(require("path"));
var Database = /** @class */ (function () {
    /**
     *
     * @param {string} dbname - name of db file as 'articles'
     */
    function Database(dbname) {
        var pathToDbFile = path_1.default.join(this.pathToDbFolder, dbname + ".db");
        /**
         * Init datastore for Articles
         * @type {Nedb}
         */
        this.db = new nedb_1.default({
            /**
             * Path to file with database
             */
            filename: pathToDbFile,
            /**
             * If 'true' then we no need to call loadDatabase()
             */
            autoload: true
        });
    }
    ;
    Object.defineProperty(Database.prototype, "pathToDbFolder", {
        /**
         * Define full path to folder with database files
         * @return {string}
         */
        get: function () {
            /**
             * +- app
             * |   |
             * |   +- models
             * |       |
             * |       +- database.ts
             * +- db
             *     |
             *     +- articles.db
             *     ...
             */
            return path_1.default.join(__dirname, '..', '..', 'db');
        },
        enumerable: true,
        configurable: true
    });
    Database.prototype.insert = function (doc) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.insert(doc, function (err, doc) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(doc);
                }
            });
        });
    };
    Database.prototype.find = function (query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.find(query, function (err, docs) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(docs);
                }
            });
        });
    };
    return Database;
}());
exports.Database = Database;
