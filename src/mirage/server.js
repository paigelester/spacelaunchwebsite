import { createServer, RestSerializer } from 'miragejs';
import { snakeCase, underscore } from 'lodash';

import Agencies from './agencies';
import Launches from './launches';

const ApplicationSerializer = RestSerializer.extend({
    root: false,
    embed: true,
    keyForAttribute(attr) {
        return snakeCase(attr);
    },
    keyForEmbeddedRelationship(attr) {
        return snakeCase(attr);
    }
});

export const makeServer = (environment = 'development') => {
    let server = createServer({
        serializers: {
            application: ApplicationSerializer,
            launch: ApplicationSerializer.extend({
                include: ['status', 'launch_service_provider', 'mission', 'rocket']
            }),
            rocket: ApplicationSerializer.extend({
                include: ['configuration']
            })
        },

        environment: environment,

        models: {
            ...Agencies.models,
            ...Launches.models
        },

        factories: {
            ...Agencies.factories,
            ...Launches.factories
        },

        seeds(dataServer) {
            Agencies.seed(dataServer);
            Launches.seed(dataServer);
        },

        routes() {
            this.urlPrefix = 'https://ll.thespacedevs.com/2.1.0/';

            Agencies.routes(this);
            Launches.routes(this);
        },

    });

    return server;
};