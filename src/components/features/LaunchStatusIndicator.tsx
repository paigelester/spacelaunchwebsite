import React from "react";
import { Badge } from "react-bootstrap";

import { LaunchStatus } from 'api/LaunchResource';

interface LaunchStatusIndicatorProps {
    status: LaunchStatus;
}

const getLaunchStatusVariant = (status: string): string => {
    switch (status) {
        case "Go":
        case "Go for Launch":
        case "Success":
        case "Launch Successful":
            return "success";
        case "TBD":
            return "warning";
        default:
            return "info";
    }
};

const LaunchStatusIndicator = (props: LaunchStatusIndicatorProps) => {
    return (
        <Badge bg={getLaunchStatusVariant(props.status.name)}>{props.status.name}</Badge>
    );
};

export default LaunchStatusIndicator;