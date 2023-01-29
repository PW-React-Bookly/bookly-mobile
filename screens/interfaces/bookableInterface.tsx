import {CarInterface} from "../bookables/car/carInterface";
import {ParkInterface} from "./parkInterface";
import FlatInterface from "../bookables/flat/flatInterface";

export type BookableInterface = FlatInterface | CarInterface | ParkInterface