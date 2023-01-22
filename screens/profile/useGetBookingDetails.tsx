import {useEffect, useState} from "react";
import {BookableType} from "../interfaces/bookingInterface";

const useGetBookingDetails = (args: {itemExternalId: string, bookableType: BookableType}) => {

    const [data, setData] = useState<any>({});

    const endpointUrl = `http://localhost:8080`;

    useEffect(() =>
        {
            fetch(buildUrl())
                .then(async (response) => {
                    if (!response.ok)
                        throw Error(response.statusText);
                    const details: any[] = await response.json();
                    setData(details);
                }).catch((error) => {
            });
        },
        [args])

    const buildUrl = () => {
        let url = endpointUrl;
        if (args.bookableType != undefined) {
            url+=`/${args.bookableType.toLowerCase()}s`
            url+=`/${args.itemExternalId}`;
        }
        return url;
    }

    return {
        data: data
    };
}

export default useGetBookingDetails;