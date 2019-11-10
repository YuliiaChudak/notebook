import db from '../db';

// Table: role | Fields: ID, NAME: (string)
// Table: person | Fields: ID, FIRST NAME, LAST NAME, BIRTHDAY, OCCUPATION, IS_STUDying
// Table: address | Fields: ID, country, city, street, apartment
// Table: phone | Fields: ID, phone
// Table: connections | FIELDS


async function seedDB() {
  // await db('person').insert([
  //   {
  //     'first_name': 'Yuliia',
  //     'last_name': 'Chudak',
  //     'patronymic': 'Valentinivna',
  //     'birthday': '1993-05-13T00:00:00.000Z',
  //     'occupation': 'UI',
  //     'is_studying': false,
  //     'created_at': '2019-11-04T19:51:57.671Z',
  //     'updated_at': '2019-11-04T19:51:57.671Z',
  //     'role_id': 2,
  //   },
  // ]);
  //
  // await db('role').insert([
  //   {
  //     'name': 'Relatives',
  //   },
  //   {
  //     'name': 'Friends',
  //   },
  //   {
  //     'name': 'Colleagues',
  //   },
  // ]);

  await db('location').insert([
    {
      'country': 'Ukraine',
      'city': 'Kharkiv',
      'address':'23 Lane, 67',
      'person_id': 1,
    }
  ]);


  await db.destroy();
}

seedDB();
