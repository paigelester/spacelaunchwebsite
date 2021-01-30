import React, { useEffect } from 'react';
import { useResource } from 'react-request-hook';
import { RouteComponentProps } from 'react-router-dom';

import launchResource from 'api/LaunchResource';

import Banner from 'components/common/Banner';

interface LaunchRouteParams {
    id: string;
}

const Launch = (props: Pick<RouteComponentProps<LaunchRouteParams>, 'match'>) => {

    const launchId: string = props.match.params.id;

    const [launchDetails, getLaunchDetails] = useResource(launchResource.getLaunch);

    useEffect(() => getLaunchDetails(launchId), [getLaunchDetails, launchId]);

    return (
        <div>
            {launchDetails.error && <Banner message='Unable to load launch details.' />}

            {launchDetails.data && (
                <div>
                    Launch
                </div>
            )}
        </div>
    );
};

export default Launch;