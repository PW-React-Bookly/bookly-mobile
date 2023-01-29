import {tokenAtom} from "../../utils/recoil/tokenAtom";
import {useRecoilValue} from "recoil";

const usePostCancelBooking = () => {

    const backendUrl = `http://localhost:8080`; // TODO Make an env value out of it for God's sake

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