export type LaunchList = {
    count: number;
    next: string;
    previous: string | null;
    results: Array<Launch>;
};

export type Launch = {
    id: string;
    url: string;
    name: string;
    status: LaunchStatus;
    window_start: Date;
    window_end: Date;
    image: string;
    launch_service_provider: LaunchServiceProvider;
    mission: Mission;
};

export type LaunchStatus = {
    id: number;
    name: string;
    abbrev: string;
    description: string;
};

export type LaunchServiceProvider = {
    id: number;
    url: string;
    name: string;
    type: string;
};

export type Mission = {
    id: number;
    launch_library_id: number;
    name: string;
    description: string;
    launch_designator: string;
    type: string;
    orbit: Orbit;
};

export type Orbit = {
    id: number;
    name: string;
    abbrev: string;
};