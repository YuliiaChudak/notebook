import db from '..';

export const getRoles = () => {
  return db('role').select('*');
};
