import {CarlyBookingRequestInterface} from "./carlyBookingRequestInterface";
import {useRecoilValue} from "recoil";
import {tokenAtom} from "../../../utils/recoil/tokenAtom";
// @ts-ignore
import {BACKEND_URL} from '@env';

const usePostCarBooking = () => {


    const token = useRecoilValue(tokenAtom);

    return (carId: string, from: Date, to: Date) => {
        const url =  BACKEND_URL + '/bookings/book/carly';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(createCarlyBookingRequest(carId, from, to))
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

const createCarlyBookingRequest = (carId: string, from: Date, to: Date) => {
    const response: CarlyBookingRequestInterface = {
        carId: carId,
        beginDate: from,
        endDate: to
    }
    return response;
}

export default usePostCarBooking;