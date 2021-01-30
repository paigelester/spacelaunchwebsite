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