import { createServer, Model, Factory, trait, Response } from 'miragejs';

export const makeServer = () => {
    let server = createServer({

        models: {
            launch: Model
        },

        factories: {
            launch: Factory.extend({
                name(i) { return `Launch name ${i + 1}`; },
                image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_image_20210107083733.jpeg',
                status: {
                    name(i) {
                        let statuses = ['Go for launch', 'To be confirmed'];

                        return statuses[i % statuses.length];
                    },
                },
                window_start(i) {
                    const startDate = new Date();
                    startDate.setDate(startDate.getDate() + (i + 1));

                    return startDate;
                },
                window_end(i) {
                    const endDate = new Date();
                    endDate.setDate(endDate.getDate() + (i + 2));

                    return endDate;
                },
                launch_service_provider: {
                    name: 'SpaceX',
                    type: 'Commercial',
                    url: 'https://ll.thespacedevs.com/2.1.0/agencies/121/'
                },

                previous: trait({
                    window_start(i) {
                        const startDate = new Date();
                        startDate.setDate(startDate.getDate() - (i + 2));

                        return startDate;
                    },
                    window_end(i) {
                        const endDate = new Date();
                        endDate.setDate(endDate.getDate() - (i + 1));

                        return endDate;
                    }
                })
            })
        },

        seeds(dataServer) {
            dataServer.createList('launch', 10);
            dataServer.createList('launch', 10, 'previous');
        },

        routes() {
            this.urlPrefix = 'https://ll.thespacedevs.com/2.1.0/'

            this.get('launch/:id', (schema, request) => {
                const launchId = request.params.id;

                const launch = schema.launches.find(launchId);
                
                if (launch === null) {
                    return Response(404);
                }

                return launch.attrs;
            });

            this.get("launch/upcoming", (schema, request) => {
                const limit = request.queryParams.limit;

                const upcomingLaunches = schema.launches.all().models.reduce((prev, current) => {
                    if (current.window_start > new Date()) {
                        prev.push(current);
                    }

                    return prev;
                }, []).slice(0, limit);

                return {
                    count: upcomingLaunches.length,
                    results: upcomingLaunches
                };
            });
        }

    });

    return server;
};