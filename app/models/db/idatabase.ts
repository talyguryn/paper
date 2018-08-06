export interface IDatabase {
  insert(doc: object, callback: () => {}): () => {};

  find(query: object, callback: () => {}): () => {};

  findOne(query: object, callback: () => {}): () => {};

  count(query: object, callback: () => {}): () => {};

  update(query: object, update: object, options: object, callback: () => {}): () => {};

  remove(query: object, options: object, callback: () => {}): () => {};
}

