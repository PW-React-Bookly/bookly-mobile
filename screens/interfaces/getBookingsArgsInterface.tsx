import {PaginationContextInterface} from "./paginationContextInterface";
import {BookableType} from "./bookingInterface";

export interface GetBookingsArgsInterface {
    pageContext: PaginationContextInterface,
    bookableType?: BookableType,
}