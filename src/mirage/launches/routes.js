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

    server.get('launch', (schema, request) => {
        const launches = schema.launches.all().models;

        return {
            count: launches.length,
            next: "",
            previous: "",
            results: launches
        };
    });

    // upcoming launch routes
    server.get("launch/upcoming", (schema, request) => {
        const defaultLimit = 10;
        const limit = request.queryParams.limit || defaultLimit;

        const defaultOffset = 0;
        const offset = request.queryParams.offset || defaultOffset;

        // find all upcoming launches
        const upcomingLaunches = schema.launches.all().models.reduce((prev, current) => {
            if (new Date(current.window_start) > new Date()) {
                prev.push(current);
            }

            return prev;
        }, []);

        // limit launches
        const limitedUpcomingLaunches = upcomingLaunches.slice(offset, limit);

        return {
            count: upcomingLaunches.length,
            next: "",
            previous: offset === defaultOffset ? null : "",
            results: limitedUpcomingLaunches
        };
    });

    // previous launch routes
    server.get("launch/previous", (schema, request) => {
        const defaultLimit = 10;
        const limit = request.queryParams.limit || defaultLimit;

        const defaultOffset = 0;
        const offset = request.queryParams.offset || defaultOffset;

        // find all upcoming launches
        const upcomingLaunches = schema.launches.all().models.reduce((prev, current) => {
            if (new Date(current.window_start) > new Date()) {
                prev.push(current);
            }

            return prev;
        }, []);

        // limit launches
        const limitedUpcomingLaunches = upcomingLaunches.slice(offset, limit);

        return {
            count: upcomingLaunches.length,
            next: "",
            previous: offset === defaultOffset ? null : "",
            results: limitedUpcomingLaunches
        };
    });
};