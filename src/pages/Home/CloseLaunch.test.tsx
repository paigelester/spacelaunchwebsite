import React from "react";
import { render } from "@testing-library/react";
import CloseLaunch, { CloseLaunchType } from "./CloseLaunch";

it("renders title as expected given close launch is an upcoming launch", () => {
    // given
    const status: string = "Go";
    const name: string = "Launch title";
    const description: string = "This is an exampe description for an upcoming launch.";

    // when
    const { container } = render(
        <CloseLaunch
            name={name}
            status={status}
            description={description}
            type={CloseLaunchType.Upcoming} />
    );

    // then
    expect(container).toMatchSnapshot();
});

it("renders title as expected given close launch is a previous launch", () => {
    // given
    const status: string = "Go";
    const name: string = "Launch title";
    const description: string = "This is an exampe description for an upcoming launch.";

    // when
    const { container } = render(
        <CloseLaunch
            name={name}
            status={status}
            description={description}
            type={CloseLaunchType.Previous} />
    );

    // then
    expect(container).toMatchSnapshot();
});
