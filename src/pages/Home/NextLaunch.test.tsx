import React from "react";
import { render } from "@testing-library/react";
import { makeServer } from 'mirage/server';
import NextLaunch from "./NextLaunch";

let server: any;
beforeEach(() => {
    server = makeServer();
    Date.now = jest.fn(() => 1618171860892);
});
afterEach(() => { server.shutdown() });

it("renders as expected", () => {
    // given
    const launch = server.create('launch');

    // when
    const { container } = render(<NextLaunch {...launch} />);

    // then
    expect(container).toMatchSnapshot();
});
