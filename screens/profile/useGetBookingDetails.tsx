import {useEffect, useState} from "react";
import {BookableType} from "../interfaces/bookingInterface";
import {BookableInterface} from "../interfaces/bookableInterface";

const useGetBookingDetails = (args: {id: string, bookableType: BookableType}) => {

    const [data, setData] = useState<any>({});

    const endpointUrl = `http://localhost:8080`;

    useEffect(() =>
        {
            fetch(buildUrl())
                .then(async (response) => {
                    if (!response.ok)
                        throw Error(response.statusText);
                    const details: BookableInterface[] = await response.json();
                    setData(details.map(d => ({...d, bookableType: args.bookableType})));
                }).catch((error) => {
                    console.log(error);
            });
        },
        [args])

    const buildUrl = () => {
        let url = endpointUrl;
        if (args.bookableType != undefined) {
            url+=`/${args.bookableType.toLowerCase()}s`
            url+=`/${args.id}`;
        }
        return url;
    }

    return {
        data: data
    };
}

export default useGetBookingDetails;