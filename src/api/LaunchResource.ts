import BaseResource, { getBaseURL } from './BaseResource';

export interface LaunchStatus {
    id: number;
    name: string;
    abbrev: string;
    description: string;
}

export interface LaunchServiceProvider {
    id: number;
    url: string;
    name: string;
    type: string | null;
}

export interface Orbit {
    id: number;
    name: string;
    abbrev: string;
}

export interface Mission {
    id: number;
    launch_library_id: number;
    name: string;
    description: string;
    launch_designator: string;
    type: string;
    orbit: Orbit;
}

export default class LaunchResource extends BaseResource {
    readonly id: number | undefined = undefined;
    readonly url: string = '';
    readonly launch_library_id: number | undefined = undefined;
    readonly slug: string = '';
    readonly name: string = '';
    readonly status: LaunchStatus | null = null;
    readonly net: string = '';
    readonly window_end: string = '';
    readonly window_start: string = '';
    readonly inhold: boolean = false;
    readonly tbdtime: boolean = false;
    readonly tbddate: boolean = false;
    readonly probability: number | undefined = undefined;
    readonly holdreason: string = '';
    readonly failreason: string = '';
    readonly hashtag: string = '';
    readonly launch_service_provider: LaunchServiceProvider | null = null;
    readonly mission: Mission | null = null;
    readonly webcast_live: boolean = false;
    readonly image: string = '';
    readonly infographic: string = '';
    readonly program: Array<any> = [];

    pk() {
        return this.id?.toString();
    }

    static urlRoot = `${getBaseURL()}/launch`;
    
    static upcomingLaunch<T extends typeof BaseResource>(this: T) {
        return super.detail().extend({
            url({ id }) { return `${LaunchResource.urlRoot}/upcoming/${id}` }
        });
    }

    static upcomingLaunches<T extends typeof BaseResource>(this: T) {
        return super.list().extend({
            url() { return `${LaunchResource.urlRoot}/upcoming` }
        });
    }

    static previousLaunch<T extends typeof BaseResource>(this: T) {
        return super.detail().extend({
            url({ id }) { return `${LaunchResource.urlRoot}/previous/${id}` }
        });
    }

    static previousLaunches<T extends typeof BaseResource>(this: T) {
        return super.list().extend({
            url() { return `${LaunchResource.urlRoot}/previous` }
        });
    }
}
