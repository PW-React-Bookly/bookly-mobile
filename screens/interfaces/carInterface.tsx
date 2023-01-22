import {BookableType} from "./bookingInterface";

export interface CarInterface {
    bookableType: BookableType
    description: string,
    itemExternalId: string
}