const fs = require('fs');
const path = require("path")

const paths = path.join(__dirname, "../agents.json");

exports.getFile = async () => {
    const data = await fs.promises.readFile(paths, "utf-8");
    return JSON.parse(data)
}


