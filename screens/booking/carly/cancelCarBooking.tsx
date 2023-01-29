
const cancelCarBooking = (bookingId: string) => {

    const backendUrl = `http://localhost:8080`; // TODO Make an env value out of it for God's sake
    const url =  backendUrl + '/bookings/cancel/' + bookingId;

    fetch(url, {method: 'POST'})
        .then(async (response) => {
            if (!response.ok)
                throw Error(response.statusText);
        }).catch((error) => {
        console.log(error);
    });
}

export default cancelCarBooking;