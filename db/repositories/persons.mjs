import db from "../index";


export const getPersons = (params, sorting) => {
    let query = db('person').whereNot('is_deleted', true).where(params);

    if (sorting) {
        query = query.orderBy(sorting.sortBy, sorting.order);
    }

    return query.select()
};

export const getBirthdayPersons = () => {
    const [ data ] = new Date().toISOString().split('T');
    const [, month, day] = data.split('-');
    const todayAccessor = `%${month}-${day}%`

    return db('person')
        .whereNot('is_deleted', true)
        .andWhere('birthday', 'like', todayAccessor)
        .select()
};
