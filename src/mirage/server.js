import { createServer, Factory, trait, Response } from 'miragejs';

import Agencies from './agencies';
import Launches from './launches';

export const makeServer = () => {
    let server = createServer({

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
            this.urlPrefix = 'https://ll.thespacedevs.com/2.1.0/'

            Agencies.routes(this);
            Launches.routes(this);
        }

    });

    return server;
};