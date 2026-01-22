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
        const agent = req.body;

        const agents = await fs.promises.readFile("agents.json", "utf-8");
        const agentsObject = JSON.parse(agents);

        agent.id = Date.now().toString();
        agentsObject.push(agent);

        fs.writeFileSync(
            "agents.json",
            JSON.stringify(agentsObject, null, 2)
        );

        res.status(201).json(agent);



    } catch (err) {
        console.log(err)
        res.status(404).send({ error: "Um erro aconteceu" })
    }
}

exports.updateIdAgents = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const agents = await fs.promises.readFile("agents.json", "utf-8");
        const agentsObject = JSON.parse(agents);

        const index = agentsObject.findIndex(
            agent => String(agent.id) === id
        );

        if (index < 0) {
            return res.status(404).json({ message: "Agente não encontrado" });
        }

        const updatedAgent = {
            ...agentsObject[index],
            ...data,
            id
        };

        agentsObject[index] = updatedAgent;

        fs.writeFileSync(
            "agents.json",
            JSON.stringify(agentsObject, null, 2)
        );

        res.status(200).json(updatedAgent);


    } catch (err) {
        console.log(err)
        res.status(404).send({ error: "Um erro aconteceu" })
    }
}

exports.deleteIdAgents = async (req, res) => {
    try {
        const { id } = req.params;

        const agents = await fs.promises.readFile("agents.json", "utf-8");
        const agentsObject = JSON.parse(agents);

        const index = agentsObject.findIndex(
            agent => String(agent.id) === id
        );

        if (index < 0) {
            return res.status(404).json({ message: "Agente não encontrado" });
        }

        agentsObject.splice(index, 1);

        fs.writeFileSync(
            "agents.json",
            JSON.stringify(agentsObject, null, 2)
        );

        res.status(204).send();

    } catch (err) {
        console.log(err)
        res.status(404).send({ error: "Um erro aconteceu" })
    }
}

