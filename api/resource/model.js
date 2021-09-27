const db = require('../../data/dbConfig');

const getResource = () => {
    return db('resources');
};

const createResource = async (resource) => {
    const [resource_id] = await db('resources').insert(resource);
    return getResource().where({ resource_id }).first();
};

module.exports = {
    getResource,
    createResource
};
