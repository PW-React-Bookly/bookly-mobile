import {CarInterface} from "../bookables/car/carInterface";
import {ParkInterface} from "./parkInterface";
import flatInterface from "../bookables/flat/flatInterface";

export type BookableInterface = flatInterface | CarInterface | ParkInterface