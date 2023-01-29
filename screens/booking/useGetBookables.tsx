import {useEffect, useState} from "react";
import {GetBookablesArgsInterface} from "../interfaces/getBookablesArgsInterface";
import {BookableInterface} from "../interfaces/bookableInterface";
import {BookableResponseInterface} from "./bookableResponseInterface";
import {useRecoilState, useRecoilValue} from "recoil";
import {tokenAtom} from "../../utils/recoil/tokenAtom";
import {loadingAtom} from "../../utils/recoil/loadingAtom";

const useGetBookables = (args: GetBookablesArgsInterface) => {

    const [data, setData] = useState<BookableInterface[]>([]);
    const [_, setLoading] = useRecoilState(loadingAtom);
    const token = useRecoilValue(tokenAtom);

    const endpointUrl = `http://localhost:8080`;

    useEffect(() =>
        {
            setLoading(true);
            fetch(buildUrl(), {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(async (response) => {
                    setLoading(false);
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