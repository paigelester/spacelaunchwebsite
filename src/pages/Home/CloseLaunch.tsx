import React from "react";
import { Card } from "react-bootstrap";

import LaunchStatus from "components/features/LaunchStatus";

export enum CloseLaunchType {
    Upcoming = "Upcoming",
    Previous = "Previous"
}

interface CloseLaunchProps {
    name: string;
    status: string;
    description: string;
    type: CloseLaunchType;
}

const CloseLaunch = (props: CloseLaunchProps) => {
    return (
        <Card>
            <Card.Header>
                <div className="p-2 pb-3 border-bottom border-light">
                    <h5 className="d-inline">{props.type} launch</h5>
                    {/* <div className="float-end">
                        <LaunchStatus status={props.status} />
                    </div> */}
                </div>
            </Card.Header>
            <Card.Body>
                <h5>{props.name}</h5>
                <p>{props.description}</p>
            </Card.Body>
        </Card>
    );
};

export default CloseLaunch;