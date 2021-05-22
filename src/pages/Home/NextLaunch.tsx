import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

import LaunchResource from 'api/LaunchResource';

import Countdown from "components/features/Countdown";
import LaunchStatusIndicator from "components/features/LaunchStatusIndicator";

const NextLaunch = (props: LaunchResource) => {
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
                                <Countdown targetDate={props.window_start} />
                            </div>
                        </div>
                    </Col>
                    <Col className="g-0">
                        <Card className="h-100">
                            <Card.Body>
                                <div className="float-start">
                                    <p className="d-inline fs-6 text-muted border-end border-dark pe-2 me-2">{props.launch_service_provider?.name}</p>
                                    <p className="d-inline fs-6 text-muted">{props.launch_service_provider?.type}</p>
                                </div>
                                {props.status && <div className="float-end"><LaunchStatusIndicator status={props.status} /></div>}
                                <h4 className="pt-5 pb-2">{props.name}</h4>
                                <p>{props.mission?.description}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NextLaunch;