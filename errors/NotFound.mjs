export default class NotFound extends Error {
    constructor(entity) {
        super();

        this.status = 404;
        this.name = 'NotFound';
        this.message = `${entity} not found`;
    };
};
