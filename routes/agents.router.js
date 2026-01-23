const express = require("express");
const Controllers = require("../controllers/agents.controls");
const router = express.Router();

router.get("/agents", Controllers.getAgents);
router.get("/agents/:id", Controllers.getIdAgents);
router.post("/agents", Controllers.createIdAgents);
router.put("/agents", (req, res) => {
    res.json({ message: "Operação invalida" });
});
router.put("/agents/:id", Controllers.updateIdAgents);
router.delete("/agents/:id", Controllers.deleteIdAgents);
router.delete("/agents", (req, res) => {
    res.json({ message: "Operação invalida" });
});

module.exports = router;