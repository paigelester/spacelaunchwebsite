import React from 'react';
import { useResource } from 'rest-hooks';
import { Container, Row, Col } from 'react-bootstrap';

import LaunchResource from 'api/LaunchResource';

import NextLaunch from './NextLaunch';
import CloseLaunch, { CloseLaunchType } from './CloseLaunch';

const HomePage = () => {

    const upcomingLaunches = useResource(LaunchResource.upcomingLaunches(), { limit: 2 });
    const previousLaunches = useResource(LaunchResource.upcomingLaunches(), { limit: 1 });
    
    return (
        <div id='home-page'>
            {upcomingLaunches.count > 0 && (
                <div data-testid='launches'>
                    <NextLaunch {...upcomingLaunches.results[0]} />
                    <Container fluid={true} className="">
                        <Row>
                            <Col sm={12} md={6} className="p-0">
                                <CloseLaunch
                                    launch={previousLaunches.results[0]}
                                    type={CloseLaunchType.Previous}/>
                            </Col>
                            <Col sm={12} md={6} className="p-0">
                                <CloseLaunch
                                    launch={upcomingLaunches.results[0]}
                                    type={CloseLaunchType.Upcoming} />
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