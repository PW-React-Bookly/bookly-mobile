import {BookableType} from "./bookingInterface";

export interface ParkInterface {
    bookableType: BookableType
    description: string,
    itemExternalId: string
}