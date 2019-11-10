import db from '..';

export const getPhoneById = (id) => {
    return  db('phone')
        .where({ 'person_id': id })
        .select()
        .first();
};