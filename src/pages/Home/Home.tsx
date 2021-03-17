import React, { useEffect } from 'react';
import { useResource } from 'react-request-hook';

import launchResource from 'api/LaunchResource';

import NextLaunch from './NextLaunch';

// import Table from 'components/common/table';
import Banner from 'components/common/Banner';

// const headings: Array<string> = [
//     'name', 'start', 'end', 'status'
// ];

// const convertDate = (inputDate: Date) => {
//     inputDate = new Date(inputDate);
//     return `${inputDate.toUTCString()}`;
// };

const HomePage = () => {

    const [launches, getLaunches] = useResource(launchResource.getLaunches);
    const [nextLaunch, getNextLaunch] = useResource(launchResource.getNextUpcomingLaunch);

    useEffect(() => getLaunches(), [getLaunches]);
    useEffect(() => getNextLaunch(), [getNextLaunch]);

    return (
        <div id='home-page'>
            {launches.error && <Banner message='Unable to load launches.' />}
            {nextLaunch.error && <Banner message='Unable to load next upcoming launch.' />}

            {nextLaunch.data && nextLaunch.data.results.length > 0 && (
                <NextLaunch {...nextLaunch.data.results[0]} />
            )}

            {/* {launches.data && (
                <Table
                    headings={headings}
                    rows={launches.data.results.map((row: Launch) => {
                        return [
                            row.name,
                            convertDate(row.window_start),
                            convertDate(row.window_end),
                            row.status.name
                        ];
                    })} />
            )} */}
        </div>
    );
};

export default HomePage;