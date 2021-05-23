import React from 'react';
import { render } from '@testing-library/react';
import moment from 'moment';
import Countdown from './Countdown';


beforeEach(() => {
    Date.now = jest.fn(() => 1618171860892);
});

// it("renders as expected", () => {
//     // given
//     let targetDate: Date = new Date(Date.now());
//     targetDate.setDate(targetDate.getDate() + 1);
//     targetDate.setSeconds(targetDate.getTime() + 1);
//     targetDate.setMinutes(targetDate.getTime() + 1);
//     targetDate.setHours(targetDate.getTime() + 1);

//     // when
//     const { container } = render(<Countdown targetDate={targetDate.toString()} />);

//     // then
//     expect(container).toMatchSnapshot();
// });

it("renders the number of days away from target date", () => {
    // given
    let targetDate = moment().add(1, "days");

    // when
    const { container } = render(<Countdown targetDate={targetDate.toString()} />);

    const daysText = container.querySelector(".countdown-days");
    const daysValue = container.querySelector(".countdown-days-value");

    // then
    expect(daysText?.textContent).toContain("days");
    expect(daysValue?.textContent).toContain("2");
});

// it("renders the number of hours away from target date", () => {
//     // given
//     let targetDate = new Date(Date.now());
//     targetDate.setSeconds(targetDate.getTime() + 1);

//     // when
//     const { container } = render(<Countdown targetDate={targetDate.toString()} />);

//     const hoursText = container.querySelector(".countdown-hours");
//     const hoursValue = container.querySelector(".countdown-hours-value");

//     // then
//     expect(hoursText?.textContent).toContain("hours");
//     expect(hoursValue?.textContent).toContain("0");
// });

// it("renders the number of minutes away from target date", () => {
//     // given
//     let targetDate = new Date(Date.now());
//     targetDate.setSeconds(targetDate.getTime() + 1);

//     // when
//     const { container } = render(<Countdown targetDate={targetDate.toString()} />);

//     const minutesText = container.querySelector(".countdown-minutes");
//     const minutesValue = container.querySelector(".countdown-minutes-value");

//     // then
//     expect(minutesText?.textContent).toContain("minutes");
//     expect(minutesValue?.textContent).toContain("34");
// });

// it("renders the number of seconds away from target date", () => {
//     // given
//     let targetDate = new Date(Date.now());
//     targetDate.setSeconds(targetDate.getTime() + 1);

//     // when
//     const { container } = render(<Countdown targetDate={targetDate.toString()} />);

//     const secondsText = container.querySelector(".countdown-seconds");
//     const secondsValue = container.querySelector(".countdown-seconds-value");

//     // then
//     expect(secondsText?.textContent).toContain("seconds");
//     expect(secondsValue?.textContent).toContain("52");
// });

// it("should countdown after 1 second", () => {
//     // given
//     let targetDate = new Date(Date.now());
//     targetDate.setSeconds(targetDate.getTime() + 1);

//     // when
//     const { container } = render(<Countdown targetDate={targetDate.toString()} />);

//     const secondsValue = container.querySelector(".countdown-seconds-value");

//     // then
//     setTimeout(() => {
//         expect(secondsValue?.textContent).toContain("52");
//     }, 1000);
// });
