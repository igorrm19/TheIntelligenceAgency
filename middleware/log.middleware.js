
const morgan = require("morgan");


morgan.token("date", () => new Date().toISOString());
module.exports = morgan("dev")