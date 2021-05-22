import React from "react";
import { Card } from "react-bootstrap";

import LaunchResource from 'api/LaunchResource';

import LaunchStatus from "components/features/LaunchStatusIndicator";

export enum CloseLaunchType {
    Upcoming = "Upcoming",
    Previous = "Previous"
}

interface CloseLaunchProps {
    type: CloseLaunchType;
    launch: LaunchResource;
}

const CloseLaunch = (props: CloseLaunchProps) => {
    return (
        <Card>
            <Card.Header>
                <div className="p-2 pb-3 border-bottom border-light">
                    <h5 className="d-inline">{props.type} launch</h5>
                    {props.launch.status && <div className="float-end"><LaunchStatus status={props.launch.status} /></div>}
                </div>
            </Card.Header>
            <Card.Body>
                <h5>{props.launch.name}</h5>
                <p>{props.launch.mission?.description}</p>
            </Card.Body>
        </Card>
    );
};

export default CloseLaunch;