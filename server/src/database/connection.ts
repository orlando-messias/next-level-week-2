// file settings to connect to database
// chosen database: sqlite

import knex from 'knex';
import path from 'path';

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')  // database path and name
  },
  useNullAsDefault: true,
});

export default db;
