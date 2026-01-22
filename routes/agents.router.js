const express = require("express");
const Controllers = require("../controllers/agents.controls");
const router = express.Router();

router.get("/", Controllers.getAgents);


module.exports = router;