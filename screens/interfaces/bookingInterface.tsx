import {UserInterface} from "./userInterface";

export enum BookableType {
    FLAT = "FLAT",
    CAR = "CAR",
    PARK = "PARK"
}

export interface BookingInterface {
    id: string,
    user: UserInterface,
    bookableType: BookableType,
    bookedFrom: Date,
    bookedUntil: Date,
    totalPrice: number,
    itemExternalId: string,
    isCancelled: boolean,
}