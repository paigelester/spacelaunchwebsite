import React from 'react';

import { Container, Row, Col, Image, Card, Badge } from 'react-bootstrap';

import Countdown from 'components/features/Countdown';

const getBadge = (launchStatus: string | undefined): JSX.Element => {
    let backgroundColour: string = "light";

    if (launchStatus !== undefined) {
        switch (launchStatus) {
            case "Go for Launch":
            case "Go":
            case "Success":
            case "Launch Successful":
                backgroundColour = "success";
                break;
            case "TBD":
            case "To Be Determined":
                backgroundColour = "warning";
                break;
        }
    }

    return <Badge bg={backgroundColour}>{launchStatus}</Badge>;
};

interface NextLaunchProps {
    name: string;
    image: string;
    status: string;
    missionDescription: string;
    launchWindowStart: string;
    launchProviderName: string;
    launchProviderType: string;
}

const NextLaunch = (props: NextLaunchProps) => {
    return (
        <div className='shadow-lg'>
            <Container fluid>
                <Row>
                    <Col md={12} lg={9} className="g-0">
                        <div className="position-relative overflow-hidden">
                            <Image src={props.image} alt='launch' className="img-fluid" />
                            <div className="position-absolute top-0 w-100 h-100 o-75 bg-dark"></div>
                            <div className="position-absolute top-50 start-50 end-0 translate-middle text-center w-100">
                                <p className="text-uppercase text-center mb-1 fs-2">Time to launch</p>
                                <Countdown targetDate={props.launchWindowStart} />
                            </div>
                        </div>
                    </Col>
                    <Col className="g-0">
                        <Card className="h-100">
                            <Card.Body>
                                <div className='float-start'>
                                    <p className="d-inline fs-6 text-muted border-end border-dark pe-2 me-2">{props.launchProviderName}</p>
                                    <p className="d-inline fs-6 text-muted">{props.launchProviderType}</p>
                                </div>
                                <div className='float-end'>{getBadge(props.status)}</div>
                                <h4 className="pt-5 pb-2">{props.name}</h4>
                                <p>{props.missionDescription}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NextLaunch;