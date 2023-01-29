import {tokenAtom} from "../../utils/recoil/tokenAtom";
import {useRecoilValue} from "recoil";
// @ts-ignore
import {BACKEND_URL} from '@env';

const usePostCancelBooking = () => {

    const backendUrl = BACKEND_URL;

    const token = useRecoilValue(tokenAtom);

    return (bookingId: string) => {
        const url =  backendUrl + '/bookings/cancel/' + bookingId;
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw Error(response.statusText);
            }).catch((error) => {
            console.log(error);
        });
    }
}

export default usePostCancelBooking;