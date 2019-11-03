import db from '..';

const table = db('person');

export function createNote(data) {
  const now = new Date().toISOString();

  return table.insert({
    ...data,
    created_at: now,
    updated_at: now
  });
}
