import React from 'react';

interface BannerProps {
    message: string;
}

const Banner = (props: BannerProps) => {
    return (
        <div className='banner'>
            <p>{props.message}</p>
        </div>
    );
};

export default Banner;