import React from 'react';
import { useResource } from 'rest-hooks';

import { UpcomingLaunchResource, PreviousLaunchResource } from 'api/LaunchResource';

import NextLaunch from './NextLaunch';


import { Container, Row, Col, Image, Card, Badge } from 'react-bootstrap';
const getBadge = (launchStatus: string | undefined): JSX.Element => {
    let backgroundColour: string = "light";

    if (launchStatus !== undefined) {
        switch (launchStatus) {
            case "Go":
            case "Go for Launch":
            case "Success":
            case "Launch Successful":
                backgroundColour = "success";
                break;
            case "TBD":
                backgroundColour = "warning";
                break;
        }
    }

    return <Badge bg={backgroundColour}>{launchStatus}</Badge>;
};

const HomePage = () => {

    const { results, ...launchesListDetails } = useResource(UpcomingLaunchResource.list(), { limit: 2 });
    // const previousLaunches = useResource(PreviousLaunchResource.list(), { limit: 1 });

    // const nextLaunch: UpcomingLaunchResource = results[0];
    // const upcomingLaunch: UpcomingLaunchResource = results[1];

    return (
        <div id='home-page'>
            {results && (
                <NextLaunch
                    name={results[0].name}
                    image={results[0].image}
                    status={results[0].status!.name}
                    launchWindowStart={results[0].window_start}
                    missionDescription={results[0].mission!.description}
                    launchProviderName={results[0].launch_service_provider!.name}
                    launchProviderType={results[0].launch_service_provider!.type} />
            )}
            <div className="container-fluid m-0 p-0">
                <div className="row">
                    <div className="col-sm-6 p-0">
                        <div className="card">
                            <div className="card-header">
                                <h4>Previous launch</h4>
                                <div className="float-end">{getBadge("Success")}</div>
                            </div>
                            <div className="card-body">
                                {/* <h5>{previousLaunches.results[0].name}</h5> */}
                                {/* <p>{previousLaunches.results[0].mission!.description}</p> */}
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 p-0">
                        <div className="card">
                            <div className="card-header">
                                <h4>Upcoming launch</h4>
                                <div className="float-end">{getBadge(results[1].status?.name)}</div>
                            </div>
                            <div className="card-body">
                                <h5>{results[1].name}</h5>
                                <p>{results[0].mission!.description}</p>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                News (Upcoming events, expedictions, landings, launches)
            </div>
            <div>
                Agencies
            </div>
        </div>
    );
};

export default HomePage;