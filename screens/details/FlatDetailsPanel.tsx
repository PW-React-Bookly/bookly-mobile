import {BookableType} from "../interfaces/bookingInterface";
import {View, Text} from "react-native";
import useGetBookingDetails from "../profile/useGetBookingDetails";
import flatInterface from "../bookables/flat/flatInterface";

const FlatDetailsPanel = (props: {id: string, bookableType: BookableType}) => {

    const {
        data,
    } = useGetBookingDetails(props);

    const flat = data as flatInterface;

    return (
        <View>
            <Text>{flat.description}</Text>
        </View>
    );
}

export default FlatDetailsPanel;