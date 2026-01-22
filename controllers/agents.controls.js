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

exports.getIdAgents = async (req, res) => {
    console.log("ok");
}

exports.createIdAgents = async (req, res) => {
    console.log("ok");
}

exports.updateIdAgents = async (req, res) => {
    console.log("ok");
}

exports.deleteIdAgents = async (req, res) => {
    console.log("ok");
}

