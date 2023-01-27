import {UserInterface} from "./userInterface";

export enum BookableType {
    Flat = "Flat",
    Car = "Car",
    Park = "Park"
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