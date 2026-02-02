const express = require("express");
const Router = require("./routes/agents.router");
const log = require("./middleware/log.middleware")
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(log)
app.use("/", Router);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});



