import React from 'react';
import { useResource } from 'rest-hooks';

import { UpcomingLaunchResource } from 'api/LaunchResource';

import NextLaunch from './NextLaunch';

const HomePage = () => {

    const upcomingLaunch = useResource(UpcomingLaunchResource.list(), { limit: 1 });

    return (
        <div id='home-page'>
            {upcomingLaunch.results.length === 1 && <NextLaunch {...upcomingLaunch.results[0]} />}
        </div>
    );
};

export default HomePage;