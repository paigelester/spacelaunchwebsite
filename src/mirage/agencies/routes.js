import { Response } from 'miragejs';

export default (server) => {
    server.get('/agencies', (schema, request) => {
        const agencies = schema.agencies.models;

        return {
            count: agencies.length,
            results: agencies
        };
    });

    server.get('/agencies/:id', (schema, request) => {
        const agencyId = request.params.id;

        const agency = schema.agencies.find(agencyId);

        if (agency === null) {
            return Response(404);
        }

        return agency.attrs;
    });
};