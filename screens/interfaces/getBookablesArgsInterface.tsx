import {PaginationContextInterface} from "./paginationContextInterface";
import {BookableType} from "./bookingInterface";

export interface GetBookablesArgsInterface {
    pageContext: PaginationContextInterface,
    bookableType?: BookableType,
    queryParameters: Map<string, string>
}