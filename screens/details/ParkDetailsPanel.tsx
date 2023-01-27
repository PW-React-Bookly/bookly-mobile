import {BookableType} from "../interfaces/bookingInterface";
import {View, Text} from "react-native";
import useGetBookingDetails from "../profile/useGetBookingDetails";
import {ParkInterface} from "../interfaces/parkInterface";

const ParkDetailsPanel = (props: {id: string, bookableType: BookableType}) => {

    const {
        data,
    } = useGetBookingDetails(props);

    const park = data as ParkInterface;

    return (
        <View>
            <Text>{park.description}</Text>
        </View>
    );
}

export default ParkDetailsPanel;