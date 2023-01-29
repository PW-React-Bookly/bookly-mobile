import {useEffect, useState} from "react";
import {GetBookablesArgsInterface} from "../interfaces/getBookablesArgsInterface";
import {BookableInterface} from "../interfaces/bookableInterface";
import {BookableResponseInterface} from "./bookableResponseInterface";

const useGetBookables = (args: GetBookablesArgsInterface) => {

    const [data, setData] = useState<BookableInterface[]>([]);

    const endpointUrl = `http://localhost:8080`;

    useEffect(() =>
        {
            fetch(buildUrl())
                .then(async (response) => {
                    if (!response.ok)
                        throw Error(response.statusText);
                    const bookablesResponse: BookableResponseInterface = await response.json();
                    setData(bookablesResponse.bookables.map(bookable => ({...bookable, bookableType: args.bookableType})));
                }).catch((error) => {
                    console.log(error);
            });
        },
        [args])

    const buildUrl = () => {
        let url = endpointUrl;
        if (args.bookableType != undefined) {
            url+=`/${args.bookableType.toLowerCase()}s`
            url+= `?page=${args.pageContext.currentPage}&pageSize=${args.pageContext.pageSize}`;
            args.queryParameters.forEach((value, key ) => {
                url+= `&${key}=${value}`;
            })
        }
        return url;
    }

    return {
        data: data
    };
}

export default  useGetBookables;