module.exports = ({ registerAction }) => {
    registerAction({
        target: "$FASTIFY_ROUTE",
        handler: [
            {
                method: "GET",
                url: "/echo/:loquesea",                    
                handler: (request, reply) => {
                    reply.send({response: request.params.loquesea});
                }
            },
            {
                method: "POST",
                url: "/echo",                    
                handler: (request, reply) => {
                    reply.send({response: request.body.input.loquesea});
                }
            }
        ]
    });
};