import React from 'react';
import { useResource } from 'rest-hooks';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import LaunchResource from 'api/LaunchResource';

import NextLaunch from './NextLaunch';
import CloseLaunch, { CloseLaunchType } from './CloseLaunch';

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

const HomePage = () => {

    const upcomingLaunches = useResource(LaunchResource.upcomingLaunches(), { limit: 2 });
    const previousLaunches = useResource(LaunchResource.upcomingLaunches(), { limit: 1 });
    
    return (
        <div id='home-page'>
            {upcomingLaunches.count > 0 && (
                <div data-testid='launches'>
                    <NextLaunch {...upcomingLaunches.results[0]} />
                    <div className='m-4'>
                        <h2 className="mb-3">Upcoming launches</h2>
                        <Carousel
                            responsive={responsive}
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            showDots={true}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={5000}
                            partialVisible={true}
                        >
                            {upcomingLaunches.results.map((launch: LaunchResource, launchIndex: number) => (
                                <div key={launchIndex} className='shadow m-2 mb-5 rounded' style={{ backgroundColor: '#E1D89F' }}>
                                    <Image src={launch.image} alt='launch' className="img-fluid mb-1" />
                                    <div className="m-2">
                                        <p className="text-muted m-0">{launch.launch_service_provider!.name}</p>
                                        <h3 className="fs-5 text-dark my-1">{launch.name}</h3>
                                        <div className="text-end my-2">
                                            <Button size="sm" className='bg-transparent border-0 text-dark'>READ MORE -</Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    {/* <Container fluid={true} className="">
                        <Row>
                            <Col sm={12} md={6} className="p-0">
                                <CloseLaunch
                                    launch={previousLaunches.results[0]}
                                    type={CloseLaunchType.Previous}/>
                            </Col>
                            <Col sm={12} md={6} className="p-0">
                                <CloseLaunch
                                    launch={upcomingLaunches.results[0]}
                                    type={CloseLaunchType.Upcoming} />
                            </Col>
                        </Row>
                    </Container> */}
                </div>
            )}
        </div>
    );
};

export default HomePage;