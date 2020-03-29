import rc from 'rc';

const APP_NAME = 'NOTEBOOK';

export default rc(APP_NAME, {
  port: 3001,
  db: {
    client: 'sqlite3',
    connection: {
      filename: './db.sqlite',
    },
  },
  twilio: {
    sid: 'AC0b3b8ed51c3c175058a85b4ac1550895',
    token: 'b6e5e77d1562763a8a07723d370926e5',
    sender: '+12015373276',
  },
});
