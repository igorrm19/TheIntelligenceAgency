const { z } = require("zod");

const agentSchema = z.object({
    name: z.string()
        .min(3, "Nome deve ter pelo menos 3 caracteres")
        .max(255, "Nome deve ter menos de 255 caracteres"),

    status: z.string()
        .min(3, "Status deve ter pelo menos 3 caracteres")
        .max(255, "Status deve ter menos de 255 caracteres")
        .regex(/^(active|inactive)$/, "Status deve ser active ou inactive"),

    skills: z.string()
        .min(3, "Skills deve ter pelo menos 3 caracteres")
        .max(255, "Skills deve ter menos de 255 caracteres")
});

module.exports = agentSchema;
