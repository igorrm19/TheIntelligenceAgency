const swaggerJSDoc = require("swagger-jsdoc");

const agentsDocs = {
    definition: {
        openapi: "3.0.0",

        info: {
            title: "Agentes API",
            version: "1.0.0",
            description: "API para gerenciar arquivos de uma agencia",
            contact: {
                name: "Igor Rodrigues Machado",
                url: "https://github.com/igorrm19/TheIntelligenceAgency",
            },
        },

        servers: [
            {
                url: "http://localhost:3000",
                description: "Local server",
            },
        ],

        paths: {
            "/agents": {
                get: {
                    tags: ["Agents"],
                    summary: "Retorna todos os agentes",
                    responses: {
                        200: {
                            description: "Lista de agentes",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            $ref: "#/components/schemas/Agent",
                                        },
                                    },
                                },
                            },
                        },
                        500: {
                            description: "Erro interno do servidor",
                        },
                    },
                },

                post: {
                    tags: ["Agents"],
                    summary: "Cria um novo agente",
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/AgentInput",
                                },
                            },
                        },
                    },
                    responses: {
                        201: {
                            description: "Agente criado com sucesso",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/Agent",
                                    },
                                },
                            },
                        },
                        400: {
                            description: "Dados inválidos",
                        },
                        500: {
                            description: "Erro interno do servidor",
                        },
                    },
                },
            },

            "/agents/{id}": {
                get: {
                    tags: ["Agents"],
                    summary: "Retorna um agente pelo ID",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            required: true,
                            schema: {
                                type: "integer",
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: "Agente encontrado",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/Agent",
                                    },
                                },
                            },
                        },
                        404: {
                            description: "Agente não encontrado",
                        },
                        500: {
                            description: "Erro interno do servidor",
                        },
                    },
                },

                put: {
                    tags: ["Agents"],
                    summary: "Atualiza um agente pelo ID",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            required: true,
                            schema: {
                                type: "integer",
                            },
                        },
                    ],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/AgentInput",
                                },
                            },
                        },
                    },
                    responses: {
                        200: {
                            description: "Agente atualizado com sucesso",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/Agent",
                                    },
                                },
                            },
                        },
                        404: {
                            description: "Agente não encontrado",
                        },
                        400: {
                            description: "Dados inválidos",
                        },
                        500: {
                            description: "Erro interno do servidor",
                        },
                    },
                },

                delete: {
                    tags: ["Agents"],
                    summary: "Remove um agente pelo ID",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            required: true,
                            schema: {
                                type: "integer",
                            },
                        },
                    ],
                    responses: {
                        204: {
                            description: "Agente removido com sucesso",
                        },
                        404: {
                            description: "Agente não encontrado",
                        },
                        500: {
                            description: "Erro interno do servidor",
                        },
                    },
                },
            },
        },

        components: {
            schemas: {
                Agent: {
                    type: "object",
                    properties: {
                        id: { type: "integer", example: 1 },
                        name: { type: "string", example: "James Bond" },
                        status: { type: "string", example: "Active" },
                        skills: {
                            type: "array",
                            items: { type: "string" },
                            example: ["Espionage", "Driving"],
                        },
                    },
                },

                AgentInput: {
                    type: "object",
                    required: ["name"],
                    properties: {
                        name: { type: "string" },
                        status: { type: "string" },
                        skills: {
                            type: "array",
                            items: { type: "string" },
                        },
                    },
                },
            },
        },
    },

    apis: [],
};

const swaggerSpec = swaggerJSDoc(agentsDocs);

module.exports = swaggerSpec;
