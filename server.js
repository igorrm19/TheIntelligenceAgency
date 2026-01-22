const express = require("express");
const port = 3000;

const app = express();
app.use(express.json());


app.listen(port || 3001, () => {
    console.log("Servidor rodando na porta", port);
});
