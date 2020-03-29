import db from '..';

export const getLocationByPersonId = id => {
  return db('location')
    .where({ person_id: id })
    .select()
    .first();
};
