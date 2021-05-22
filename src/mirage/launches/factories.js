import { Factory, trait } from 'miragejs';

export default {
    launch: Factory.extend({
        id(i) { return i + 1; },
        url: "https://ll.thespacedevs.com/2.2.0/launch/896d876d-e834-4810-8a5e-44d6b6a42630/",
        launch_library_id: null,
        slug: "falcon-9-block-5-starlink-21",
        name: "Falcon 9 Block 5 | Starlink 21",
        last_updated: "2020-10-31T03:00:01Z",
        net: "2021-03-15T10:01:00Z",
        window_end: "2021-03-15T10:01:00Z",
        window_start: "2021-03-15T10:01:00Z",
        inhold: false,
        tbdtime: false,
        tbddate: false,
        probability: 90,
        holdreason: "",
        failreason: "",
        hashtag: "",
        pad: {
            id: 87,
            url: "https://ll.thespacedevs.com/2.2.0/pad/87/",
            agency_id: null,
            name: "Launch Complex 39A",
            info_url: null,
            wiki_url: "https://en.wikipedia.org/wiki/Kennedy_Space_Center_Launch_Complex_39#Launch_Pad_39A",
            map_url: "http://maps.google.com/maps?q=28.608+N,+80.604+W",
            latitude: "28.60822681",
            longitude: "-80.60428186",
            location: {
                id: 27,
                url: "https://ll.thespacedevs.com/2.2.0/location/27/",
                name: "Kennedy Space Center, FL, USA",
                country_code: "USA",
                map_image: "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_27_20200803142447.jpg",
                total_launch_count: 184,
                total_landing_count: 0
            },
            map_image: "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_87_20200803143537.jpg",
            total_launch_count: 127
        },
        webcast_live: false,
        image: "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20210308112429.png",
        infographic: "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_infographic_20210314032200.jpeg",
        program: [],

        upcoming: trait({
            window_start() {
                var today = new Date();
                var result = new Date();
                result.setDate(today.getDate() + 1);
                return result.toDateString();
            }
        }),

        afterCreate(launch, server) {
            server.create('launchStatus', { launch });
            server.create('launchServiceProvider', { launch });
            server.create('mission', { launch });
            server.create('pad', { launch });
        }
    }),
    launchStatus: Factory.extend({
        id(i) { return i + 1; },
        abbrev: 'TBD',
        name: 'To Be Determined',
        description: 'Current date is a \'No Earlier Than\' estimation based on unreliable or interpreted sources.',

        toBeConfirmed: trait({
            abbrev: 'TBC',
            name: 'To Be Confirmed',
            description: 'Awaiting official confirmation - current date is known with some certainty.',
        }),

        goForLaunch: trait({
            abbrev: 'Go',
            name: 'Go for Launch',
            description: 'Current T-0 confirmed by official or reliable sources.',
        }),

        successful: trait({
            abbrev: 'Success',
            name: 'Launch Successful',
            description: 'The launch vehicle successfully inserted its payload(s) into the target orbit(s).',
        }),

        failure: trait({
            abbrev: 'Failure',
            name: 'Launch Failure',
            description: 'Either the launch vehicle did not reach orbit, or the payload(s) failed to separate.',
        }),

        onHold: trait({
            abbrev: 'Hold',
            name: 'On Hold',
            description: 'The countdown has been paused, but the launch can still happen within the launch window.',
        }),

        inFlight: trait({
            abbrev: 'In Flight',
            name: 'Launch in Flight',
            description: 'The lauch vehicle has lifted off from the launchpad.',
        }),

        partialFailure: trait({
            abbrev: 'Partial Failure',
            name: 'Launch was a Partial Failure',
            description: 'Either the launch vehicle reached orbit but did not deliver its payload in the targeted orbit, or an exceptional event made it impossible to consider the mission a success.',
        })
    }),
    launchServiceProvider: Factory.extend({
        id(i) { return i + 1; },
        url(i) { return `https://ll.thespacedevs.com/2.2.0/agencies/${i + 1}/`; },
        name(i) { return `Launch provider ${i + 1}`; },
        type: 'Government'
    }),
    mission: Factory.extend({
        id(i) { return i + 1; },
        launch_library_id: null,
        name(i) { return `Launch provider ${i + 1}`; },
        description: 'First cargo delivery mission to the space station.',
        launch_designator: null,
        type(i) {
            const types = [
                'Earth Science', 'Planetary Science', 'Astrophysics', 'Heliophysics', 'Human Exploration', 'Robotic Exploration',
                'Government/Top Secret', 'Tourism', 'Unknown', 'Communications', 'Resupply', 'Suborbital', 'Test Flight',
                'Dedicated Rideshare', 'Navigation', '', 'Test Target', 'Lunar Exploration'
            ];

            return types[i % types.length];
        }
    }),
    rocket: Factory.extend({
        id(i) { return i + 1; },
        afterCreate(rocket, server) {
            server.create('rocketConfiguration', { rocket });
        }
    }),
    rocketConfiguration: Factory.extend({
        id(i) { return i + 1; },
        url(i) { return `https://ll.thespacedevs.com/2.2.0/config/launcher/${i + 1}/`; },
        name(i) { return `Rocket name ${i + 1}`; },
        family(i) { return `Rocket family ${i + 1}`; },
        full_name(i) { return `Rocket full name ${i + 1}`; },
        variant(i) { return `Rocket variant ${i + 1}`; }
    }),
    pad: Factory.extend({
        id(i) { return i + 1; },
        url(i) { return `https://ll.thespacedevs.com/2.2.0/pad/${i + 1}/`; },
        agency_id(i) { return i + 1; },
        name(i) { return `Space Launch Complex ${i + 1}`; },
        info_url: null,
        wiki_url: null,
        map_url: 'http://maps.google.com/maps?q=34.644+N,+120.593+W',
        latitude: '34.644',
        longitude: '-120.593',
        map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_93_20200803143225.jpg',
        total_launch_count: 3,
        afterCreate(pad, server) {
            server.create('location', { pad });
        }
    }),
    location: Factory.extend({
        id(i) { return i + 1; },
        url(i) { return `https://ll.thespacedevs.com/2.2.0/location/${i + 1}/`; },
        name: "Vandenberg SFB, CA, USA",
        country_code: "USA",
        map_image: "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_11_20200803142416.jpg",
        total_launch_count: 84,
        total_landing_count: 3
    })
}