import {useEffect, useState} from "react";
import {BookableType} from "../interfaces/bookingInterface";
import {BookableInterface} from "../interfaces/bookableInterface";
// @ts-ignore
import {BACKEND_URL} from '@env';

const useGetBookingDetails = (args: {id: string, bookableType: BookableType}) => {

    const [data, setData] = useState<any>({});
    const [isLoading, setIsLoading] = useState(false);



    useEffect(() =>
        {
            setIsLoading(true);
            fetch(buildUrl())
                .then(async (response) => {
                    setIsLoading(false);
                    if (!response.ok)
                        throw Error(response.statusText);
                    const details: BookableInterface = await response.json();
                    setData(details);
                }).catch((error) => {
                    console.log(error);
            });
        },
        [args])

    const buildUrl = () => {
        let url = BACKEND_URL;
        if (args.bookableType != undefined) {
            url+=`/${args.bookableType.toLowerCase()}s`
            url+=`/${args.id}`;
        }
        return url;
    }

    return {
        data: data,
        isLoading: isLoading
    };
}

export default useGetBookingDetails;