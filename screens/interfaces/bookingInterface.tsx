import {UserInterface} from "./userInterface";

export enum BookableType {
    Flat,
    Car,
    Park
}

export interface BookingInterface {
    id: number,
    user: UserInterface,
    bookableType: BookableType,
    bookedFrom: Date,
    bookedUntil: Date,
    totalPrice: number,
    itemExternalId: string,
    isCancelled: boolean,
}