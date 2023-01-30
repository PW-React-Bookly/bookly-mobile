import {useRecoilValue} from "recoil";
import {tokenAtom} from "../../../utils/recoil/tokenAtom";
import {FlatlyBookingRequestInterface} from "./fatlyBookingRequestInterface";
// @ts-ignore
import {BACKEND_URL} from '@env';


const usePostFlatBooking = () => {

    const token = useRecoilValue(tokenAtom);

    return (flatId: string, from: Date, to: Date) => {
        const url =  BACKEND_URL + '/bookings/book/flatly';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(createFlatlyBookingRequest(flatId, from, to))
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

const createFlatlyBookingRequest = (flatId: string, from: Date, to: Date) => {
    const response: FlatlyBookingRequestInterface = {
        flatId: flatId,
        beginDate: from,
        endDate: to
    }
    return response;
}

export default usePostFlatBooking;