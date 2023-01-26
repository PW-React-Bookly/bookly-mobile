import {BookableType} from "../interfaces/bookingInterface";
import {View, Text} from "react-native";
import useGetBookingDetails from "../profile/useGetBookingDetails";
import {FlatInterface} from "../interfaces/flatInterface";

const FlatDetailsPanel = (props: {id: string, bookableType: BookableType}) => {

    const {
        data,
    } = useGetBookingDetails(props);

    const flat = data as FlatInterface;

    return (
        <View>
            <Text>{flat.description}</Text>
        </View>
    );
}

export default FlatDetailsPanel;