import db from '../db';

// Table: role | Fields: ID, NAME: (string)
// Table: person | Fields: ID, FIRST NAME, LAST NAME, BIRTHDAY, OCCUPATION, IS_STUDying
// Table: address | Fields: ID, country, city, street, apartment
// Table: phone | Fields: ID, phone
// Table: connections | FIELDS


async function seedDB() {
  await db('person').insert([
    {
      'id': 1,
      'first_name': 'Yuliia',
      'last_name': 'Chudak',
      'patronymic': 'Valentinivna',
      'birthday': '1993-05-13',
      'occupation': 'UI',
      'is_studying': false,
      'created_at': '1993-05-13',
      'updated_at': '1993-05-13',
    },
  ]);

  await db.destroy();
}

seedDB();
