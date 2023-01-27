import {BookableType} from "../../interfaces/bookingInterface";
import {CarModelInterface} from "./carModelInterface";

export interface CarInterface {
    bookableType: BookableType,
    id: string,
    color: string,
    dayPrice: number,
    equipment: string[],
    model: CarModelInterface,
    photos: string[]
}