const Models = require("../models/agents.models")
const fs = require('fs');

exports.getAgents = async (req, res) => {  // funcionando
    try {
        const agents = await Models.getFile();
        res.status(200).json(agents);

    } catch (err) {
        console.log(err)
        res.status(500).send({ error: "Um erro aconteceu" })
    }
}

exports.getIdAgents = async (req, res) => {  //funcionando
    try {
        const agents = await fs.promises.readFile("agents.json", "utf-8");
        const agent = JSON.parse(agents).find((agent) => String(agent.id) === req.params.id);

        if (!agent) {
            return res.status(404).send({ message: "Agente não encontrado" });
        }

        res.send(agent);


    } catch (err) {
        console.log(err)
        res.status(500).send({ error: "Um erro aconteceu" })
    }
}

exports.createIdAgents = async (req, res) => {
    try {


    } catch (err) {
        console.log(err)
        res.status(404).send({ error: "Um erro aconteceu" })
    }
}

exports.updateIdAgents = async (req, res) => {
    try {

    } catch (err) {
        console.log(err)
        res.status(404).send({ error: "Um erro aconteceu" })
    }
}

exports.deleteIdAgents = async (req, res) => {
    try {

    } catch (err) {
        console.log(err)
        res.status(404).send({ error: "Um erro aconteceu" })
    }
}

