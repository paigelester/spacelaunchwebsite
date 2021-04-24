import React from "react";
import { render } from "@testing-library/react";
import NextLaunch from "./NextLaunch";

beforeEach(() => {
    Date.now = jest.fn(() => 1618171860892);
});

it("renders as expected", () => {
    // given
    const name: string = "Launch name";
    const status: string = "Go for Launch";
    const launchProviderName: string = "Launch Co";
    const launchProviderType: string = "Commercial";
    const launchWindowStart: string = new Date(Date.now()).toString();
    const missionDescription: string = "This is an example description of the launch mission.";

    // when
    const { container } = render(
        <NextLaunch
            name={name}
            image={""}
            status={status}
            launchWindowStart={launchWindowStart}
            missionDescription={missionDescription} 
            launchProviderName={launchProviderName}
            launchProviderType={launchProviderType} />
    );

    // then
    expect(container).toMatchSnapshot();
});
