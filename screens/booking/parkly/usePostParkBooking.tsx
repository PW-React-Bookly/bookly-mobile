import {useRecoilValue} from "recoil";
import {tokenAtom} from "../../../utils/recoil/tokenAtom";
import {ParklyBookingRequestInterface} from "./parklyBookingRequestInterface";
// @ts-ignore
import {BACKEND_URL} from '@env';


const usePostFlatBooking = () => {

    const token = useRecoilValue(tokenAtom);

    return (parkId: string, from: Date, to: Date) => {
        const url =  BACKEND_URL + '/bookings/book/parkly';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(createFlatlyBookingRequest(parkId, from, to))
        })
            .then(async (response) => {
                if (!response.ok)
                    throw Error(response.statusText);
                else console.log("[DEBUG] booked successfully");
            }).catch((error) => {
            console.log(error);
        });
    }
}

const createFlatlyBookingRequest = (parkId: string, from: Date, to: Date) => {
    const response: ParklyBookingRequestInterface = {
        parkId: parkId,
        beginDate: from,
        endDate: to
    }
    return response;
}

export default usePostFlatBooking;