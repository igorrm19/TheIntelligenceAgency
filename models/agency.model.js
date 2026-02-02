const Pool = require("../models/dbAgents.models");

const getEntries = () => {
    return Pool.query("SELECT * FROM agents ORDER BY name ASC");
};

const getEntryById = (id) => {
    return Pool.query("SELECT * FROM agents WHERE id = $1", [id]);
};

const createEntry = (entry) => {
    return Pool.query(
        `INSERT INTO agents (name, status, skills)
         VALUES ($1, $2, $3)
         RETURNING *`,
        [entry.name, entry.status, entry.skills]
    );
};

const updateEntry = (id, entry) => {
    return Pool.query(
        `UPDATE agents
         SET name = $2,
         status = $3,
         skills = $4
         WHERE id = $1
         RETURNING *`,
        [id, entry.name, entry.status, entry.skills]
    );
};

const deleteEntry = (id) => {
    return Pool.query("DELETE FROM agents WHERE id = $1", [id]);
};


module.exports = {
    getEntries,
    getEntryById,
    createEntry,
    updateEntry,
    deleteEntry
}
