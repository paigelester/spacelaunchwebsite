import { Response } from 'miragejs';

export default (server) => {
    // launch routes
    server.get('launch/:id', (schema, request) => {
        const launchId = request.params.id;

        const launch = schema.launches.find(launchId);

        if (launch === null) {
            return Response(404);
        }

        return launch;
    });

    server.get('launch', function(schema, request) {
        const launches = schema.launches.all();

        return {
            count: launches.length,
            next: "",
            previous: "",
            results: this.serialize(launches)
        };
    });

    // upcoming launch routes
    server.get("launch/upcoming", function (schema, request) {
        const defaultLimit = 10;
        const limit = request.queryParams.limit || defaultLimit;

        const defaultOffset = 0;
        const offset = request.queryParams.offset || defaultOffset;

        const upcomingLaunches = schema.launches.where(launch => new Date(launch.window_start) > new Date());

        return {
            count: upcomingLaunches.length,
            next: "",
            previous: offset === defaultOffset ? null : "",
            results: this.serialize(upcomingLaunches.slice(offset, limit))
        };
    });

    server.get("launch/upcoming/:id", function (schema, request) {
        const launchId = request.params.id;

        const launch = schema.launches.find(launchId);

        if (launch === null) {
            return Response(404);
        }

        return launch;
    });

    // previous launch routes
    server.get("launch/previous", function(schema, request) {
        const defaultLimit = 10;
        const limit = request.queryParams.limit || defaultLimit;

        const defaultOffset = 0;
        const offset = request.queryParams.offset || defaultOffset;

        const previousLaunches = schema.launches.where(launch => new Date(launch.window_start) > new Date());

        return {
            count: previousLaunches.length,
            next: "",
            previous: offset === defaultOffset ? null : "",
            results: this.serialize(previousLaunches.slice(offset, limit))
        };
    });
};