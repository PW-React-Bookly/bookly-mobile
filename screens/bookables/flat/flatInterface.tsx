import {BookableType} from "../../interfaces/bookingInterface";

export default interface flatInterface {
    bookableType: BookableType,
    id: string,
    country: string,
    town: string,
    address: string,
    capacity: number,
    rooms: number,
    footage: string,
    price: number,
    contactInfo: string,
    description: string,
    thumbnail: string
};