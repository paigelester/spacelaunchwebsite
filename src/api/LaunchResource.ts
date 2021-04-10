import { Resource } from '@rest-hooks/rest';

export abstract class BaseResource extends Resource {
    static list<T extends typeof Resource>(this: T) {
        return super.list().extend({
            schema: { count: Number, next: String || null, previous: String || null, results: [this] },
        });
    }
}

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

export class LaunchResource extends BaseResource {
    readonly id: number | undefined = undefined;
    readonly name: string = '';

    pk() {
        return this.id?.toString();
    }

    static urlRoot = 'https://ll.thespacedevs.com/2.1.0/launch';
}

export class UpcomingLaunchResource extends BaseResource {
    readonly id: number | undefined = undefined;
    readonly url: string = '';
    readonly launch_library_id: number | undefined = undefined;
    readonly slug: string = '';
    readonly name: string = '';
    readonly status: LaunchStatus | null = null;
    readonly net: Date = new Date();
    readonly window_end: Date = new Date();
    readonly window_start: Date = new Date();
    readonly inhold: boolean = false;
    readonly tbdtime: boolean = false;
    readonly tbddate: boolean = false;
    readonly probability: number | undefined = undefined;
    readonly holdreason: string = '';
    readonly failreason: string = '';
    readonly hashtag: string = '';
    readonly launch_service_provider: LaunchServiceProvider | null = null;

    readonly webcast_live: boolean = false;
    readonly image: string = '';
    readonly infographic: string = '';
    readonly program: Array<any> = [];


    pk() {
        return this.id?.toString();
    }

    static urlRoot = 'https://ll.thespacedevs.com/2.1.0/launch/upcoming/';
}

export class PreviousLaunchResource extends BaseResource {
    readonly id: number | undefined = undefined;
    readonly name: string = '';

    pk() {
        return this.id?.toString();
    }

    static urlRoot = 'https://ll.thespacedevs.com/2.1.0/launch/previous/';
}
