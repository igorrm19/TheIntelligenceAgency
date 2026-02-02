const Agency = require("../models/agency.model");

exports.getAgents = async (req, res) => {
    try {

        const agents = await Agency.getEntries();

        if (agents.rowCount === 0) {
            return res.status(200).json([]);
        }

        res.status(200).json(agents.rows)

    } catch (err) {
        console.log(err)
        res.status(500).send({ error: "Um erro aconteceu" })
    }
}

exports.getIdAgents = async (req, res) => {
    try {

        const agents = await Agency.getEntryById(req.params.id);

        if (agents.rowCount === 0) {
            return res.status(404).send({ message: "Agente não encontrado" });
        }

        res.status(200).json(agents.rows)


    } catch (err) {
        console.log(err)
        res.status(500).send({ error: "Um erro aconteceu" })
    }
}

exports.createIdAgents = async (req, res) => {
    try {
        const agente = req.body;

        const result = await Agency.createEntry(agente);


        res.status(201).send(result.rows);


    } catch (err) {
        console.log(err)
        res.status(500).send({ error: "Um erro aconteceu" })
    }
}

exports.updateIdAgents = async (req, res) => {
    try {
        const agente = req.body;

        const result = await Agency.updateEntry(req.params.id, agente);

        if (result.rowCount === 0) {
            return res.status(404).send({ message: "Agente não atualizado" });
        }

        res.status(200).json(result.rows);


    } catch (err) {
        console.log(err)
        res.status(500).send({ error: "Um erro aconteceu" })
    }
}

exports.deleteIdAgents = async (req, res) => {
    try {
        const result = await Agency.deleteEntry(req.params.id);

        if (result.rowCount === 0) {
            return res.status(404).send({ message: "Agente não deletado" });
        }

        res.status(204).send("Agente deletado com sucesso");


    } catch (err) {
        console.log(err)
        res.status(500).send({ error: "Um erro aconteceu" })
    }
}

