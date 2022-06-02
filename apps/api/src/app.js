const forrest = require("@forrestjs/core");
const serviceFastify = require("@forrestjs/service-fastify");
const {echoFeature} = require("./features/echo-feature");
forrest.run({
    settings: {
        fastify:{
            port: 3000
        },
    },
    services: [serviceFastify],
    features: [echoFeature]

});