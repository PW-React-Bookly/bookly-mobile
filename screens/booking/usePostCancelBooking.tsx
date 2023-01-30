import {tokenAtom} from "../../utils/recoil/tokenAtom";
import {useRecoilValue} from "recoil";
// @ts-ignore
import {BACKEND_URL} from '@env';

const usePostCancelBooking = () => {

    const token = useRecoilValue(tokenAtom);

    return (bookingId: string) => {
        const url =  BACKEND_URL + '/bookings/cancel/' + bookingId;
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