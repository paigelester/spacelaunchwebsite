import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface LaunchRouteParams {
    id: string;
}

const Launch = (props: Pick<RouteComponentProps<LaunchRouteParams>, 'match'>) => {

    const launchId: string = props.match.params.id;

    return (
        <div>
            <h1>Launch {launchId}</h1>
        </div>
    );
};

export default Launch;