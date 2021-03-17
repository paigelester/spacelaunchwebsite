import { Response } from 'miragejs';

export default (server) => {
    // launch routes
    server.get('launch/:id', (schema, request) => {
        const launchId = request.params.id;

        const launch = schema.launches.find(launchId);

        if (launch === null) {
            return Response(404);
        }

        return launch.attrs;
    });

    server.get("launch/upcoming", (schema, request) => {
        const limit = request.queryParams.limit;

        const upcomingLaunches = schema.launches.all().models.reduce((prev, current) => {
            if (new Date(current.window_start) > new Date()) {
                prev.push(current);
            }

            return prev;
        }, []).slice(0, limit);

        return {
            count: upcomingLaunches.length,
            results: upcomingLaunches
        };
    });
};