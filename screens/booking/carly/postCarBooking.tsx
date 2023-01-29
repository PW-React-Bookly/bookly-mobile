import {CarlyBookingRequestInterface} from "./carlyBookingRequestInterface";

const postCarBooking = (carId: string, from: Date, to: Date) => {

    const backendUrl = `http://localhost:8080`; // TODO Make an env value out of it for God's sake
    const url =  backendUrl + '/bookings/book/carly';

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

const createCarlyBookingRequest = (carId: string, from: Date, to: Date) => {
    const response: CarlyBookingRequestInterface = {
        carId: carId,
        beginDate: from,
        endDate: to
    }
    return response;
}

export default postCarBooking;