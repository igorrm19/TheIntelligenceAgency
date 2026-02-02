const { agentSchema } = require("../validate/agents.validates");



const validateEntry = (req, res, next) => {
    const result = agentSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            message: "Dados inválidos",
            errors: result.error.errors.map(err => ({
                field: err.path[0],
                message: err.message
            }))
        });
    }

    req.body = result.data;
    next();
};


module.exports = validateEntry;