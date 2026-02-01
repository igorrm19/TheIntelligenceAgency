/**
 * Tarefa para depois semparar models de controllrs
 */


const Models = require("../models/agents.models");
const Pool = require("../models/dbAgents.models");


exports.getAgents = async (req, res) => {  // funcionando
    try {

        const agents = await Pool.query("SELECT * FROM books");

        if (agents.rowCount === 0) {
            return [];
        }

        res.status(200).json(agents.rows)

    } catch (err) {
        console.log(err)
        res.status(500).send({ error: "Um erro aconteceu" })
    }
}

exports.getIdAgents = async (req, res) => {  //funcionando
    try {

        const agents = await Pool.query("SELECT * FROM books WHERE id = $1", [req.params.id]);

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

        const result = await Pool.query(
            `INSERT INTO agents (name, status, skills)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [agente.name, agente.status, agente.skills]
        );


        res.status(201).send(result.rows);


    } catch (err) {
        console.log(err)
        res.status(404).send({ error: "Um erro aconteceu" })
    }
}

exports.updateIdAgents = async (req, res) => {
    try {
        const agente = req.body;

        const result = await Pool.query(
            `UPDATE agents
             SET name = $1,
                 status = $2,
                 skills = $3
             WHERE id = $4
             RETURNING *`,
            [agente.name, agente.status, agente.skills]
        );

        if (result.rowCount === 0) {
            return res.status(404).send({ message: "Agente não atualizado" });
        }

        res.status(200).json(result.rows);


    } catch (err) {
        console.log(err)
        res.status(404).send({ error: "Um erro aconteceu" })
    }
}

exports.deleteIdAgents = async (req, res) => {
    try {
        const result = await Pool.query("DELETE FROM agents WHERE id = $1", [req.params.id]);

        if (result.rowCount === 0) {
            return res.status(404).send({ message: "Agente não deletado" });
        }

        res.status(204).send("Agente deletado com sucesso");


    } catch (err) {
        console.log(err)
        res.status(404).send({ error: "Um erro aconteceu" })
    }
}

