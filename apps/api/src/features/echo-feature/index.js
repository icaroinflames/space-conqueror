const helloHandler = (request, reply) => {
    reply.send(`hello ${request.params.nombre}`);
};


const echoFeature = {
    target: "$FASTIFY_ROUTE",
    handler: [
        {
            method: "GET",
            url: "/:cosas",        
            handler: (request, reply) => {
                reply.send(request.params);
            }
        },
        {
            method: "GET",
            url: "/hello/:nombre",                    
            handler: helloHandler
        }
    ]
}; 

module.exports = {echoFeature};