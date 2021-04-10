import { Resource } from '@rest-hooks/rest';

export default abstract class BaseResource extends Resource {
    static list<T extends typeof Resource>(this: T) {
        return super.list().extend({
            schema: { count: Number, next: String || null, previous: String || null, results: [this] },
        });
    }
}

export const getBaseURL = () => {
    return 'https://ll.thespacedevs.com/2.1.0';
};