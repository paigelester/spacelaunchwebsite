import React from 'react';
import { render } from '@testing-library/react';
import LaunchStatusIndicator from './LaunchStatusIndicator';

it("renders as expected given status is Go", () => {
    // given
    const status: string = "Go";

    // when
    const { container } = render(<LaunchStatusIndicator status={status} />);

    // then
    expect(container).toMatchSnapshot();
});

it("renders as expected given status is Go for Launch", () => {
    // given
    const status: string = "Go for Launch";

    // when
    const { container } = render(<LaunchStatusIndicator status={status} />);

    // then
    expect(container).toMatchSnapshot();
});

it("renders as expected given status is Success", () => {
    // given
    const status: string = "Success";

    // when
    const { container } = render(<LaunchStatusIndicator status={status} />);

    // then
    expect(container).toMatchSnapshot();
});

it("renders as expected given status is Launch Successful", () => {
    // given
    const status: string = "Launch Successful";

    // when
    const { container } = render(<LaunchStatusIndicator status={status} />);

    // then
    expect(container).toMatchSnapshot();
});

it("renders as expected given status is TBD", () => {
    // given
    const status: string = "TBD";

    // when
    const { container } = render(<LaunchStatusIndicator status={status} />);

    // then
    expect(container).toMatchSnapshot();
});

it("renders as expected given status is unknown", () => {
    // given
    const status: string = "unknown";

    // when
    const { container } = render(<LaunchStatusIndicator status={status} />);

    // then
    expect(container).toMatchSnapshot();
});
