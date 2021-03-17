import React from 'react';

import './NextLaunch.scss'

import { Launch } from 'models/Launch';

const NextLaunch = (props: Launch) => {
    return (
        <div className='next-launch'>
            <div className='next-launch-image-container'>
                <img src={props.image} alt='launch' />
            </div>

            <div className='next-launch-details shadow p-3 mb-5 bg-body rounded'>
                <div className='float-right'>
                    <span className="badge badge-secondary">{props.status.abbrev}</span>
                </div>

                <h1 className='h6 mb-4'>{props.name}</h1>
                <p>{props.status.description}</p>
            </div>
        </div>
    );
};

export default NextLaunch;