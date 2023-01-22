import {useEffect, useState} from "react";
import {GetBookablesArgsInterface} from "../interfaces/getBookablesArgsInterface";
import {BookableInterface} from "../interfaces/bookableInterface";

const useGetBookables = (args: GetBookablesArgsInterface) => {

    const [data, setData] = useState<BookableInterface[]>([]);

    const endpointUrl = `http://localhost:8080`;

    useEffect(() =>
        {
            fetch(buildUrl())
                .then(async (response) => {
                    if (!response.ok)
                        throw Error(response.statusText);
                    const bookables: BookableInterface[] = await response.json();
                    setData(bookables.map(bookable => ({...bookable, bookableType: args.bookableType})));
                }).catch((error) => {
            });
        },
        [args])

    const buildUrl = () => {
        let url = endpointUrl;
        if (args.bookableType != undefined) {
            url+=`/${args.bookableType.toLowerCase()}s`
            url+= `?page=${args.pageContext.currentPage}&pageSize=${args.pageContext.pageSize}`;
        }
        return url;
    }

    return {
        data: data
    };
}

export default  useGetBookables;