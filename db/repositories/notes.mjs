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
        const operations = [];

        if(phones) {
          const phoneRecords = phones.map(item => ({ phone: item, person_id: id }));
          operations.push(
            db('phone')
              .transacting(t)
              .insert(phoneRecords)
          )
        }

        if(addresses) {
          const locationRecords = addresses.map(item => ({ ...item, person_id: id }));
          operations.push(
            db('location')
              .transacting(t)
              .insert(locationRecords)
          )
        }

         return Promise.all(operations);
      })
      .then(t.commit)
      .catch(t.rollback)
  })
}

export const getNoteByPersonId = id => {
    if (!Number.isInteger(Number(id))) {
        throw new ValidationError('ID parameter should be a number')
    }

    return db.raw(`
        select first_name, last_name, patronymic, birthday, occupation, is_studying, role_id,
            ( select phone from phone where phone.person_id = person.id) phone,
            ( select city from location where location.person_id = person_id ) city,
            ( select address from location where location.person_id = person_id ) address,
            ( select country from location where location.person_id = person_id ) country
        from person where is_deleted = false and id = ${id};
    `);
};

export const deleteNote = (id) => {

  return  db('person')
    .whereNot('is_deleted', true)
    .where({ 'id': id })
    .update({ 'is_deleted': true });
};

export const updateNote = (id, { addresses, phones, ...data }) => {
  const now = new Date().toISOString();

  if ('id' in data) {
    throw new NotPermittedParamsChangeError('id');
  }

  if ('is_deleted' in data) {
    throw new NotPermittedParamsChangeError('is_deleted');
  }

  return db.transaction(t => {
    return db('person')
        .transacting(t)
        .where({'is_deleted': false, id})
        .update({ ...data, updated_at: now })
        .then(() => {
          const operations = [];

          if (phones) {
            const [ number ] = phones;

            operations.push(
                db('phone')
                    .transacting(t)
                    .where({ 'person_id': id })
                    .update({ phone: number })
            )
          }

          if (addresses) {
            const [ location ] = addresses;
            const { city, country, address } = location;

            operations.push(
                db('location')
                    .transacting(t)
                    .where({ 'person_id': id })
                    .update({ city, country, address })
            )
          }

          return Promise.all(operations);
        })
        .then(t.commit)
        .catch(t.rollback)
  });
};
