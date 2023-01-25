import {BookingInterface} from "../interfaces/bookingInterface";
import {View, Text} from "react-native";

const BookingPanel = (props: {booking: BookingInterface}) => {

    return (
        <View>
            <Text>
                I am booking No. {props.booking.id}
            </Text>
        </View>
    );
}

export default BookingPanel;