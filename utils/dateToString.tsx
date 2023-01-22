import moment from "moment";

export const dateToString = (date: Date): string => {
    return moment(date).format("DD/MM/YYYY");
}