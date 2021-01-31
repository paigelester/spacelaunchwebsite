import React, { useEffect } from 'react';
import { useResource } from 'react-request-hook';
import { RouteComponentProps } from 'react-router-dom';

import agencyResource from 'api/AgencyResource';

import Banner from 'components/common/Banner';

interface AgencyRouteParams {
    id: string;
}

const AgencyPage = (props: Pick<RouteComponentProps<AgencyRouteParams>, 'match'>) => {

    const agencyId = props.match.params.id;

    const [agency, getAgency] = useResource(agencyResource.getAgency);

    useEffect(() => getAgency(agencyId), [getAgency]);

    return (
        <div>
            {agency.error && <Banner message={agency.error.message} />}

            {agency.data && (
                <div>
                    Agency
                </div>
            )}
        </div>
    );
};

export default AgencyPage;