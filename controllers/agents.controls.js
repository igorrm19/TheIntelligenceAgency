const Models = require("../models/agents.models")

exports.getAgents = async (req, res) => {
    try {
        const agents = await Models.getFile();
        res.status(200).json(agents);

    } catch (err) {
        console.log(err)
        res.status(404).send({ error: "Um erro aconteceu" })
    }
}