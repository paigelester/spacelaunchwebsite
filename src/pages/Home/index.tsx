import React from 'react';
import { useResource } from 'rest-hooks';
import { Button, Image } from 'react-bootstrap';

import LaunchResource from 'api/LaunchResource';

import NextLaunch from './NextLaunch';

import LaunchStatusIndicator from "components/features/LaunchStatusIndicator";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 40
    }
};

const CustomDot = ({ onClick, active }: any) => {
    const buttonClasses: string = "bg-transparent border-0 text-white";

    return (
        <button
            className={active ? `${buttonClasses} active` : `${buttonClasses} inactive`}
            onClick={() => onClick()}
        >
            <i className={active ? "bi bi-star-fill" : "bi bi-star"}></i>
        </button>
    );
};

const HomePage = () => {

    const upcomingLaunches = useResource(LaunchResource.upcomingLaunches(), { limit: 5 });
    
    return (
        <div id='home-page'>
            {upcomingLaunches.count > 0 && (
                <div data-testid='launches'>
                    <NextLaunch {...upcomingLaunches.results[0]} />
                    <div className='m-4'>
                        <h2 className="mb-4">Upcoming launches</h2>
                        <Carousel
                            customDot={<CustomDot />}
                            responsive={responsive}
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            showDots={true}
                            infinite={true}
                            autoPlay={false}
                            autoPlaySpeed={5000}
                            partialVisible={true}
                        >
                            {upcomingLaunches.results.map((launch: LaunchResource, launchIndex: number) => (
                                <div key={launchIndex} className="position-relative shadow rounded bg-black">
                                    <div className="position-absolute ms-4 mt-2">
                                        <LaunchStatusIndicator status={launch.status?.abbrev || "Unknown"} />
                                    </div>

                                    <div className="mx-2 mb-0" style={{
                                        display: 'flex',
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden'
                                    }}>
                                        <Image src={launch.image} alt='launch' className="mb-0" style={{
                                            width: 'auto',
                                            height: 'auto',
                                            maxHeight: '250px'
                                        }} />
                                    </div>

                                    <div className="mx-2 px-3 py-2 bg-white mb-5">
                                        <p className="text-muted m-0">{launch.launch_service_provider!.name}</p>
                                        <h3 className="fs-5 text-dark my-1">{launch.name}</h3>
                                        <div className="text-end my-2">
                                            <Button size="sm" className='bg-transparent border-0 text-dark'>
                                                READ MORE <i className="bi bi-chevron-right"></i>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;