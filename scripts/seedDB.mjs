import db from '../db';

async function seedDB() {
  await db('role').insert([
    { 'name': 'Relatives' },
    { 'name': 'Friends' },
    { 'name': 'Colleagues' },
  ]);

  if (process.env.WITH_DRAFT) {
    await db('person').insert([
      {
        'first_name': 'Yuliia',
        'last_name': 'Chudak',
        'patronymic': 'Valentinivna',
        'birthday': '1993-05-13T00:00:00.000Z',
        'occupation': 'UI',
        'is_studying': false,
        'created_at': '2019-11-04T19:51:57.671Z',
        'updated_at': '2019-11-04T19:51:57.671Z',
        'role_id': 2,
      },
    ]);

    await db('location').insert([
      {
        'country': 'Ukraine',
        'city': 'Kharkiv',
        'address':'23 Lane, 67',
        'person_id': 1,
      }
    ]);
  }

  await db.destroy();
}

seedDB();
