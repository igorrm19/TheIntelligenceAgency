const express = require("express");
const Controllers = require("../controllers/agents.controls");
const validateEntry = require("../middleware/validate.middleware");
const router = express.Router();

router.get("/agents", Controllers.getAgents);
router.get("/agents/:id", Controllers.getIdAgents);
router.post("/agents", validateEntry, Controllers.createIdAgents);

router.put("/agents", (req, res) => {
    res.json({ message: "Operação invalida" });
});

router.put("/agents/:id", validateEntry, Controllers.updateIdAgents);
router.delete("/agents/:id", Controllers.deleteIdAgents);

router.delete("/agents", (req, res) => {
    res.json({ message: "Operação invalida" });
});


module.exports = router;