import React from 'react';
import { useResource } from 'rest-hooks';
import { Container, Row, Col } from 'react-bootstrap';

import { UpcomingLaunchResource, PreviousLaunchResource } from 'api/LaunchResource';

import NextLaunch from './NextLaunch';
import CloseLaunch, { CloseLaunchType } from './CloseLaunch';

const HomePage = () => {

    const { results } = useResource(UpcomingLaunchResource.list(), { limit: 2 });
    const previousLaunches = useResource(PreviousLaunchResource.list(), { limit: 1 });

    return (
        <div id='home-page'>
            {results.length > 0 && (
                <div>
                    <NextLaunch
                        name={results[0].name}
                        image={results[0].image}
                        status={results[0].status!.name}
                        launchWindowStart={results[0].window_start}
                        missionDescription={results[0].mission!.description}
                        launchProviderName={results[0].launch_service_provider!.name}
                        launchProviderType={results[0].launch_service_provider!.type} />
                    <Container fluid={true} className="">
                        <Row>
                            <Col sm={12} md={6} className="p-0">
                                <CloseLaunch
                                    name={previousLaunches.results[0].name}
                                    type={CloseLaunchType.Previous}
                                    status={previousLaunches.results[0].status!.name}
                                    description={previousLaunches.results[0].mission!.description} />
                            </Col>
                            <Col sm={12} md={6} className="p-0">
                                <CloseLaunch
                                    name={results[1].name}
                                    type={CloseLaunchType.Upcoming}
                                    status={results[1].status!.name}
                                    description={results[1].mission!.description} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
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