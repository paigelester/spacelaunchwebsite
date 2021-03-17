import { request, Resource } from 'react-request-hook';

import { Agency } from 'models/Agency';

const agencyResource = {
    getAgency: (id: string): Resource<Agency> => {
        return request<Agency>({
            url: `agencies/${id}`,
            method: 'get'
        });
    }
};

export default agencyResource;