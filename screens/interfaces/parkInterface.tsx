import {BookableType} from "./bookingInterface";

export interface ParkInterface {
    bookableType: BookableType
    description: string,
    id: string,
    name: string,
    photo: string,
    pricePerDay: number,
    latitude: number,
    longitude: number,
    security: boolean,
    parkingLotType: string,
    capacity: number
}