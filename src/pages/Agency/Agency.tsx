import React from 'react';
import { useResource } from 'rest-hooks';
import { RouteComponentProps } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';

import './Agency.scss';

import { AgenciesResource } from 'api/AgenciesResource';

interface AgencyRouteParams {
    id: string;
}

const AgencyPage = (props: Pick<RouteComponentProps<AgencyRouteParams>, 'match'>) => {

    const agencyId: string = props.match.params.id;

    const agency = useResource(AgenciesResource.detail(), { id: agencyId });

    const getLaunchData = () => {
        return [
            { name: 'Successful', value: agency.successful_launches, colour: '#73BA7A' },
            { name: 'Pending', value: agency.pending_launches, colour: '#F6EA8C' },
            { name: 'Failed', value: agency.failed_launches, colour: '#C03546' }
        ]
    };

    const getLandingData = () => {
        return [
            { name: 'Successful', value: agency.successful_landings, colour: '#73BA7A' },
            { name: 'Failed', value: agency.failed_landings, colour: '#C03546' }
        ]
    };

    return (
        <div className='agency'>
            <div className='agency-details'>
                <Jumbotron>
                    <h1 className='display-4'>{agency.name}</h1>
                    <p>{agency.description}</p>
                </Jumbotron>

                <div className='m-4'>
                    <Card>
                        <Card.Header>
                            <Card.Title>Stats</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="pl-2 mb-4">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><i className="bi bi-circle-fill mr-2 text-success"></i>Successful</li>
                                    <li className="list-inline-item ml-3"><i className="bi bi-circle-fill mr-2 text-warning"></i>Pending</li>
                                    <li className="list-inline-item ml-3"><i className="bi bi-circle-fill mr-2 text-danger"></i>Failed</li>
                                </ul>
                            </div>
                            <div className="container-fluid px-0">
                                <div className="row no-gutters">
                                    <div className='col'>
                                        <h5>Launches</h5>
                                            <PieChart width={100} height={100}>
                                                <Pie
                                                    data={getLaunchData()}
                                                    cx={40}
                                                    stroke='#061417'
                                                    innerRadius={25}
                                                    paddingAngle={5}
                                                    dataKey="value"
                                                >
                                                    {getLaunchData().map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={entry.colour} />
                                                    ))}
                                                </Pie>
                                            </PieChart>
                                    </div>
                                    <div className='col'>
                                        <h5>Landings</h5>
                                        <ResponsiveContainer width="100%" height={80}>
                                            <PieChart>
                                                <Pie
                                                    data={getLandingData()}
                                                    cx="50%"
                                                    stroke='#061417'
                                                    innerRadius={25}
                                                    paddingAngle={5}
                                                    dataKey="value"
                                                >
                                                    {getLandingData().map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={entry.colour} />
                                                    ))}
                                                </Pie>
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AgencyPage;