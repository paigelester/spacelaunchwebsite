import { Model, belongsTo } from 'miragejs';

export default {
    launch: Model.extend({
        status: belongsTo('launchStatus'),
        launch_service_provider: belongsTo('launchServiceProvider'),
        mission: belongsTo()
    }),
    launchStatus: Model.extend({ launch: belongsTo() }),
    launchServiceProvider: Model.extend({ launch: belongsTo() }),
    mission: Model.extend({ launch: belongsTo() }),
    rocket: Model.extend({ launch: belongsTo(), configuration: belongsTo('rocketConfiguration') }),
    rocketConfiguration: Model.extend({ rocket: belongsTo() }),
    pad: Model.extend({ launch: belongsTo() }),
    location: Model.extend({ pad: belongsTo() })
};