import React, { useState, useEffect } from 'react';
import moment from 'moment';

type CountdownTimeRemaining = {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
};

interface CountdownProps {
    targetDate: string;
}

const Countdown = (props: CountdownProps) => {

    const countdownFunc = (): CountdownTimeRemaining => {
        const now: any = moment();
        const target: any = moment(props.targetDate);

        const countdown = moment(target - now);

        return {
            days: countdown.format("D"),
            hours: countdown.format("HH"),
            minutes: countdown.format("mm"),
            seconds: countdown.format("ss")
        };
    };

    const [timeRemaining, setTimeRemaining] = useState<CountdownTimeRemaining>(countdownFunc());

    useEffect(() => {
        const countdownInterval = setInterval(() => setTimeRemaining(countdownFunc), 1000);

        return () => clearInterval(countdownInterval);
    }, [countdownFunc]);

    return (
        <div className="countdown">
            <div className="text-center me-2 d-inline-block">
                <p className="countdown-days-value fs-1 m-0">{timeRemaining.days}</p>
                <p className="countdown-days text-muted text-uppercase m-0">days</p>
            </div>
            <div className="text-center me-2 d-inline-block">
                <p className="countdown-hours-value fs-1 m-0">{timeRemaining.hours}</p>
                <p className="countdown-hours text-muted text-uppercase m-0">hours</p>
            </div>
            <div className="text-center me-2 d-inline-block">
                <p className="countdown-minutes-value fs-1 m-0">{timeRemaining.minutes}</p>
                <p className="countdown-minutes text-muted text-uppercase m-0">minutes</p>
            </div>
            <div className="text-center d-inline-block">
                <p className="countdown-seconds-value fs-1 m-0">{timeRemaining.seconds}</p>
                <p className="countdown-seconds text-muted text-uppercase m-0">seconds</p>
            </div>
        </div>
    );
};

export default Countdown;