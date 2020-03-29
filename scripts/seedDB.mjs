import db from '../db';

async function seedDB() {
  await db('role').insert([{ name: 'Relatives' }, { name: 'Friends' }, { name: 'Colleagues' }]);

  await db.destroy();
}

seedDB();
