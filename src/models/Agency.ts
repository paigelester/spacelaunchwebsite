export type Agency = {
    id: number;
    name: string;
    abbrev: string;
    country_code: string;
    description: string;
    administrator: string;
    founding_year: string;
    info_url: string;
    wiki_url: string;
    launchers: string;
    spacecraft: string;
    total_launch_count: number;
    successful_launches: number;
    consecutive_successful_launches: number;
    failed_launches: number;
    pending_launches: number;
    successful_landings: number;
    failed_landings: number;
    attempted_landings: number;
    consecutive_successful_landings: number;
    logo_url: string;
    image_url: string;
    nation_url: string;
    launcher_list: Array<LauncherListItem>;
};

export type LauncherListItem = {
    id: number;
    launch_library_id: number;
    url: string;
    name: string;
    description: string;
    family: string;
    full_name: string;
    variant: number;
    alias: string;
    min_stage: number;
    max_stage: number;
    length: number;
    diameter: number;
    maiden_flight: Date;
    launch_mass: number;
    leo_capacity: number;
    gto_capacity: null,
    to_thrust: number;
    apogee: null,
    vehicle_range: null,
    image_url: string;
    info_url: string;
    wiki_url: string;
    consecutive_successful_launches: number;
    successful_launches: number;
    failed_launches: number;
    pending_launches: number;
};

export type AgencyListItem = {
    id: number;
    name: string;
    abbrev: string;
    country_code: string;
    description: string;
    administrator: string;
    founding_year: string;
    info_url: string;
    wiki_url: string;
    launchers: string;
    spacecraft: string;
};