import db from '../db';

// Table: role | Fields: ID, NAME: (string)
// Table: person | Fields: ID, FIRST NAME, LAST NAME, BIRTHDAY, OCCUPATION, IS_STUDying
// Table: address | Fields: ID, country, city, street, apartment
// Table: phone | Fields: ID, phone
// Table: connections | FIELDS


async function initDB() {
  await db.schema.createTable('person',t  => {
    t.increments().primary().unique();
    t.string('first_name').notNullable();
    t.string('last_name').notNullable();
    t.string('patronymic');
    t.date('birthday').notNullable();
    t.string('occupation').notNullable();
    t.boolean('is_studying');
    t.date('created_at').notNullable();
    t.date('updated_at').notNullable();
  });

  await db.destroy();
}

initDB();
