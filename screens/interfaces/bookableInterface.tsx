import {FlatInterface} from "./flatInterface";
import {CarInterface} from "../bookables/car/carInterface";
import {ParkInterface} from "./parkInterface";

export type BookableInterface = FlatInterface | CarInterface | ParkInterface