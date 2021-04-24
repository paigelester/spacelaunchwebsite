import React from "react";
import { Badge } from "react-bootstrap";

interface LaunchStatus {
    status: string;
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

const LaunchStatus = (props: LaunchStatus) => {
    return (
        <Badge bg={getLaunchStatusVariant(props.status)}>{props.status}</Badge>
    );
};

export default LaunchStatus;