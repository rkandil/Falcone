

export type Planet = {name: string, distance: number, active?: string};
export type Vehicle = {name: string, total_no: number, max_distance: number, speed: number};
export type ErrorCodes = {errorCode: number, errorMessage: string};
export type Falcons = {token: string, planet_names: string[], vehicle_names: string[], time: number, maximum_number_steps: number}
export type Token = {token: string};
export type PlanetOutput = {distance: number, currentStep: number, uniqueId: string};
export type VehicleOutput = {uniqueId: string, currentStep: number};
export type ComponentReference = {uniqueId: string, vehiclePlanetCompnent: any}
export type Caching = {cachingId: string, cachedObject: any};
export type Result = {status: string, planet?: string};
