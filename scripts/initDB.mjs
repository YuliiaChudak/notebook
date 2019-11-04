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
    t.boolean('is_deleted').defaultTo(false);
    t.integer('role_id').notNullable();
    t.foreign('role_id').references('role.id');
  });

  await db.schema.createTable('role', t => {
    t.increments().primary().unique();
    t.string('name').notNullable();
  });

  await db.schema.createTable('phone', t => {
    t.increments().primary().unique();
    t.string('phone').notNullable().unique();
    t.integer('person_id').notNullable();
    t.foreign('person_id').references('person.id');
  });

  await db.schema.createTable('location', t => {
    t.increments().primary().unique();
    t.string('country').notNullable();
    t.string('city').notNullable();
    t.string('address').notNullable();
    t.integer('person_id').notNullable();
    t.foreign('person_id').references('person.id');
  });

  await db.destroy();
}

initDB();
