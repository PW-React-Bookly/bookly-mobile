import {useRecoilValue} from "recoil";
import {tokenAtom} from "../../../utils/recoil/tokenAtom";
import {FlatlyBookingRequestInterface} from "./fatlyBookingRequestInterface";


const usePostFlatBooking = () => {

    const backendUrl = `http://localhost:8080`; // TODO Make an env value out of it for God's sake
    const url =  backendUrl + '/bookings/book/flatly';
    const token = useRecoilValue(tokenAtom);

    return (flatId: string, from: Date, to: Date) => {
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