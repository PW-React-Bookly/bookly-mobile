import {CarBrandInterface} from "./carBrandInterface";

export interface CarModelInterface {
    name: string,
    brand: CarBrandInterface,
    carType: string,
    fuelType: string,
    horsePower: string,
    isGearBoxAutomatic: boolean,
    numberOfDoors: number,
    numberOfSeats: number,
    productionYear: string,
    trunkCapacity: number
}