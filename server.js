const express = require("express");
const Router = require("./routes/agents.router");
const log = require("./middleware/log.middleware");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/agents.swagger");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(log)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/", Router);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Swagger UI: http://localhost:${PORT}/api-docs`);
});



