import { Coordinates } from "./coordinates";

export interface Venue {
    id: number;
    name: string;
    address: string;
    coordinates: Coordinates;
}
