import { Factory, trait } from 'miragejs';

const baseAgencyFactory = {
    id(i) { return i + 1; },
    name(i) { return `Agency name ${i + 1}`; },
    abbrev(i) { return `AN${i + 1}`; },
    featured: false,
    type: 'Commerical',
    country_code: 'GB',
    description: 'This is a description about the agency.',
    administrator: 'Mr Administrator name',
    founding_year: '2005',
    info_url: 'http://exmaple.com',
    wiki_url: 'http://exmaple.com',
    launchers: 'Launcher 1, Launcher 2',
    spacecraft: 'Craft 1, Craft 2',
    parent: null,
    image_url: null,

    multiCountry: trait({ country_code: 'GB, USA' }),

    // missing data traits
    noDescription: trait({ description: null }),
    noLanchers: trait({ description: 'None' }),
    noSpacecrafts: trait({ spacecraft: 'None' })
};

export default {
    agencyListItem: Factory.extend({...baseAgencyFactory}),
    agency: Factory.extend({
        ...baseAgencyFactory,
        total_launch_count: 120,
        successful_launches: 113,
        consecutive_successful_launches: 5,
        failed_launches: 7,
        pending_launches: 35,
        successful_landings: 80,
        failed_landings: 13,
        attempted_landings: 94,
        consecutive_successful_landings: 5,
        logo_url: './mirage/img/logo.jpg',
        nation_url: null
    })
}