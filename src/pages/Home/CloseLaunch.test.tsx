import React from "react";
import { render } from "@testing-library/react";
import { makeServer } from 'mirage/server';
import CloseLaunch, { CloseLaunchType } from "./CloseLaunch";

let server: any;
beforeEach(() => { server = makeServer(); });
afterEach(() => { server.shutdown() });

it("renders as expected", () => {
    // given
    const launch = server.create('launch');

    // when
    const { container } = render(
        <CloseLaunch launch={launch} type={CloseLaunchType.Upcoming} />
    );

    // then
    expect(container).toMatchSnapshot();
});

it("renders title as expected given close launch is an upcoming launch", () => {
    // given
    const launch = server.create('launch');

    // when
    const { getByText } = render(
        <CloseLaunch launch={launch} type={CloseLaunchType.Upcoming} />
    );

    // then
    expect(getByText('Upcoming launch')).toBeTruthy();
});

it("renders title as expected given close launch is a previous launch", () => {
    // given
    const launch = server.create('launch');

    // when
    const { getByText } = render(
        <CloseLaunch launch={launch} type={CloseLaunchType.Previous} />
    );

    // then
    expect(getByText('Previous launch')).toBeTruthy();
});
