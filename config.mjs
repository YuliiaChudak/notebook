import rc from 'rc';

const APP_NAME = 'NOTEBOOK';

export default rc(APP_NAME, {
  port: 3001,
  db: {
    client: 'sqlite3',
    connection: {
      filename: './db.sqlite',
    }
  },
})