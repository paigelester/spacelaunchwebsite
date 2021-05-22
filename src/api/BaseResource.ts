import { Resource, Schema } from '@rest-hooks/rest';

export default class BaseResource extends Resource {
    readonly id: number | undefined = undefined;

    pk() {
        return this.id?.toString();
    }

    static getListSchema(resource: any) {
        const listSchema: Schema = {
            results: [resource], count: Number, next: String || null, previous: String || null
        };

        return listSchema;
    }

    static list<T extends typeof Resource>(this: T) {
        return super.list().extend({
            schema: BaseResource.getListSchema(this)
        });
    }
}

export const getBaseURL = () => {
    return 'https://ll.thespacedevs.com/2.1.0';
};
