import db from '..';

const person = db('person');
const phone = db('phone');

export function createNote({ phones, ...notesData }) {
  const now = new Date().toISOString();

  return db.transaction(t => {
    return person
      .transacting(t)
      .insert({ ...notesData, created_at: now, updated_at: now })
      .then(([id]) => {
        const phoneRecords = phones.map(item => ({ phone: item, person_id: id }));

        return phone
          .transacting(t)
          .insert(phoneRecords)
      })
      .then(t.commit)
      .catch(t.rollback)
  })
}
