import Datastore from 'nedb';
import path from 'path';

interface IDocument {
  _id: string;
}

export class Database {

  /**
   * Database object
   */
  private db: Nedb;

  /**
   *
   * @param {string} dbname - name of db file as 'articles'
   */
  constructor(dbname: string) {
    const pathToDbFile = path.join(this.pathToDbFolder, `${dbname}.db`);

    /**
     * Init datastore for Articles
     * @type {Nedb}
     */
    this.db = new Datastore({
      /**
       * Path to file with database
       */
      filename: pathToDbFile,

      /**
       * If 'true' then we no need to call loadDatabase()
       */
      autoload: true
    });
  };

  /**
   * Define full path to folder with database files
   * @return {string}
   */
  private get pathToDbFolder(): string {
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
    return path.join(__dirname, '..', '..', 'db');
  }

  insert(doc: IDocument): Promise<IDocument|Error> {
    return new Promise((resolve, reject) => {
      this.db.insert(doc, (err: Error, doc: IDocument) => {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      })
    });
  }

  find(query: any): Promise<IDocument[]|Error> {
    return new Promise((resolve, reject) => {
      this.db.find(query, (err: Error, docs: IDocument[]) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      })
    });
  }
}
