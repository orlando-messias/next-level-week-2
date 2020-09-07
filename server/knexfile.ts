// file settings to create database

import path from 'path';

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')  // the dababase path and name
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')  // path where tables will be placed
  },
  useNullAsDefault: true,
};
