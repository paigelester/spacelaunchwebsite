import { request, Resource } from 'react-request-hook';

import { LaunchList, Launch } from 'models/Launch';

const launchResource = {
    getLaunch: (id: string): Resource<Launch> => {
        return request<Launch>({
            url: `launch/${id}`
        });
    },

    getLaunches: (): Resource<LaunchList> => {
        return request<LaunchList>({
            url: `launch/upcoming/?limit=20&is_crewed=false&include_suborbital=true&related=false&hide_recent_previous=false`,
            method: 'GET'
        });
    },

    getNextUpcomingLaunch: (): Resource<LaunchList> => {
        return request<LaunchList>({
            url: `launch/upcoming/?limit=1&is_crewed=false&include_suborbital=true&related=false&hide_recent_previous=false`,
            method: 'GET'
        });
    }
};

export default launchResource;