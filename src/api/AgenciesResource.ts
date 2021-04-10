import { Resource } from '@rest-hooks/rest';

export class AgenciesResource extends Resource {
    readonly id: number | undefined = undefined;
    readonly name: string = '';
    readonly description: string = '';
    readonly featured: boolean = false;
    readonly successful_launches: number = 0;
    readonly pending_launches: number = 0;
    readonly failed_launches: number = 0;
    readonly successful_landings: number = 0;
    readonly failed_landings: number = 0;

    pk() {
        return this.id?.toString();
    }

    static urlRoot = 'https://ll.thespacedevs.com/2.1.0/agencies';
}
