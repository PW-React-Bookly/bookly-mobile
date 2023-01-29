import {useEffect, useState} from "react";
import {BookingInterface} from "../interfaces/bookingInterface";
import {GetBookingsArgsInterface} from "../interfaces/getBookingsArgsInterface";
import {tokenAtom} from "../../utils/recoil/tokenAtom";
import {useRecoilValue} from "recoil";

const useGetBookings = (args: GetBookingsArgsInterface) => {

    const [data, setData] = useState<BookingInterface[]>([]);

    const token = useRecoilValue(tokenAtom);

    const endpointUrl = `http://localhost:8080/bookings/user?page=${args.pageContext.currentPage}&pageSize=${args.pageContext.pageSize}`;

    useEffect(() =>
        {
            fetch(buildUrl(), {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(async (response) => {
                if (!response.ok)
                    throw Error(response.statusText);
                const bookings: BookingInterface[] = await response.json();
                setData(bookings);
            }).catch((error) => {
                console.log(error);
            });
        },
        [args])

    const buildUrl = () => {
        let url = endpointUrl;
        if (args.bookableType != undefined) {
            url+=`&bookableType=${args.bookableType}`
        }
        return url;
    }

    return {
        data: data
    };
}

export default  useGetBookings;