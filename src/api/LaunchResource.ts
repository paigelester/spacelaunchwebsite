import BaseResource, { getBaseURL } from './BaseResource';

interface LaunchStatus {
    id: number;
    name: string;
    abbrev: string;
    description: string;
}

interface LaunchServiceProvider {
    id: number;
    url: string;
    name: string;
    type: string;
}

interface LaunchMission {
    description: string;
}

export class LaunchResource extends BaseResource {
    readonly id: number | undefined = undefined;
    readonly name: string = '';

    pk() {
        return this.id?.toString();
    }

    static urlRoot = `${getBaseURL()}/launch`;
}

export class UpcomingLaunchResource extends BaseResource {
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
    readonly mission: LaunchMission | null = null;

    readonly webcast_live: boolean = false;
    readonly image: string = '';
    readonly infographic: string = '';
    readonly program: Array<any> = [];


    pk() {
        return this.id?.toString();
    }

    static urlRoot = `${getBaseURL()}/launch/upcoming/`;
}

export class PreviousLaunchResource extends BaseResource {
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
    readonly mission: LaunchMission | null = null;
    readonly webcast_live: boolean = false;
    readonly image: string = '';
    readonly infographic: string = '';
    readonly program: Array<any> = [];

    pk() {
        return this.id?.toString();
    }

    static urlRoot = `${getBaseURL()}/launch/previous/`;
}
