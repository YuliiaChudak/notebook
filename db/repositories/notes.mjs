import db from '..';
import NotPermittedParamsChangeError from '../../errors/NotPermittedParamsChangeError';
import ValidationError from '../../errors/ValidationError';
import personSchema from '../../schemas/person-schema';

export function createNote({ addresses, phones, ...notesData }) {
  const now = new Date().toISOString();
  const { error } = personSchema.validate(notesData);

  if (error) {
    throw new ValidationError(error)
  }

  return db.transaction(t => {

    return db('person')
      .transacting(t)
      .insert({ ...notesData, created_at: now, updated_at: now })
      .then(([id]) => {
        const insertions = [];

        if(phones) {
          const phoneRecords = phones.map(item => ({ phone: item, person_id: id }));
          insertions.push(
            db('phone')
              .transacting(t)
              .insert(phoneRecords)
          )
        }

        if(addresses) {
          const locationRecords = addresses.map(item => ({ ...item, person_id: id }));
          insertions.push(
            db('location')
              .transacting(t)
              .insert(locationRecords)
          )
        }

         return Promise.all(insertions);
      })
      .then(t.commit)
      .catch(t.rollback)
  })
}

export const getNotes = (params, sorting) => {
  let query = db('person').whereNot('is_deleted', true).where(params);

  if (sorting) {
    query = query.orderBy(sorting.sortBy, sorting.order);
  }

  return query.select()
};

export const deleteNote = (id) => {

  return  db('person')
    .whereNot('is_deleted', true)
    .where({ 'id': id })
    .update({ 'is_deleted': true });
};

export const updateNote = (id, params) => {
  const now = new Date().toISOString();

  if ('id' in params) {
    throw new NotPermittedParamsChangeError('id');
  }

  if ('is_deleted' in params) {
    throw new NotPermittedParamsChangeError('is_deleted');
  }

  return  db('person')
    .where({'is_deleted': false, id})
    .update({ ...params, updated_at: now });
};
