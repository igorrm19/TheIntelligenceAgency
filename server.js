const express = require("express");
const Router = require("./routes/agents.router");
const app = express();

app.use(express.json());
app.use("/", Router);


app.listen(5000, () => {
    console.log("Servidor rodando na porta 5000");
});



