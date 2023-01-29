import {useRecoilValue} from "recoil";
import {tokenAtom} from "../../../utils/recoil/tokenAtom";
import {ParklyBookingRequestInterface} from "./parklyBookingRequestInterface";


const usePostFlatBooking = () => {

    const backendUrl = `http://localhost:8080`; // TODO Make an env value out of it for God's sake
    const url =  backendUrl + '/bookings/book/parkly';
    const token = useRecoilValue(tokenAtom);

    return (parkId: string, from: Date, to: Date) => {
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