import {BookableType} from "../interfaces/bookingInterface";
import {View, Text} from "react-native";
import useGetBookingDetails from "../profile/useGetBookingDetails";
import {CarInterface} from "../interfaces/carInterface";

const CarDetailsPanel = (props: {itemExternalId: string, bookableType: BookableType}) => {

    const {
        data,
    } = useGetBookingDetails(props);

    const car = data as CarInterface;

    return (
      <View>
          <Text>{car.description}</Text>
      </View>
    );
}

export default CarDetailsPanel;