import { Factory, trait } from 'miragejs';

export default {
    launch: Factory.extend({
        id(i) { return i + 1; },
        url: "https://ll.thespacedevs.com/2.2.0/launch/896d876d-e834-4810-8a5e-44d6b6a42630/",
        launch_library_id: null,
        slug: "falcon-9-block-5-starlink-21",
        name: "Falcon 9 Block 5 | Starlink 21",
        status: {
            id: 3,
            name: "Launch Successful",
            abbrev: "Success",
            description: "The launch vehicle successfully inserted its payload(s) into the target orbit(s)."
        },
        net: "2021-03-15T10:01:00Z",
        window_end: "2021-03-15T10:01:00Z",
        window_start: "2021-03-15T10:01:00Z",
        inhold: false,
        tbdtime: false,
        tbddate: false,
        probability: 90,
        holdreason: "",
        failreason: "",
        hashtag: null,
        launch_service_provider: {
            id: 121,
            url: "https://ll.thespacedevs.com/2.2.0/agencies/121/",
            name: "SpaceX",
            type: "Commercial"
        },
        rocket: {
            id: 2838,
            configuration: {
                id: 164,
                launch_library_id: 188,
                url: "https://ll.thespacedevs.com/2.2.0/config/launcher/164/",
                name: "Falcon 9 Block 5",
                family: "Falcon",
                full_name: "Falcon 9 Block 5",
                variant: "Block 5"
            }
        },
        mission: {
            id: 1248,
            launch_library_id: null,
            name: "Starlink 21",
            description: "A batch of 60 satellites for Starlink mega-constellation - SpaceX's project for space-based Internet communication system.",
            launch_designator: null,
            type: "Communications",
            orbit: {
                id: 8,
                name: "Low Earth Orbit",
                abbrev: "LEO"
            }
        },
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
        webcast_live: true,
        image: "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20210308112429.png",
        infographic: "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_infographic_20210314032200.jpeg",
        program: []
    })
}