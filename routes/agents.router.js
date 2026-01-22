const express = require("express");
const Controllers = require("../controllers/agents.controls");
const router = express.Router();

router.get("/agents", Controllers.getAgents);


module.exports = router;