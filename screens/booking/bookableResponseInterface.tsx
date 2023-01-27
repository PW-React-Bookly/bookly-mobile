import {BookableInterface} from "../interfaces/bookableInterface";

export interface BookableResponseInterface {
    pageNumber: number,
    pageSize: number,
    totalRecords: number,
    bookables: BookableInterface[]
}