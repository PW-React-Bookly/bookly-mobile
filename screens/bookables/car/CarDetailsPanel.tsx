import {BookableType} from "../../interfaces/bookingInterface";
import {View, Text} from "react-native";
import useGetBookingDetails from "../../profile/useGetBookingDetails";
import {CarInterface} from "./carInterface";

const CarDetailsPanel = (props: {id: string, bookableType: BookableType}) => {

    const {
        data,
    } = useGetBookingDetails(props);

    const car = data as CarInterface;

    return (
      <View>
          <Text>{car.dayPrice}</Text>
      </View>
    );
}

export default CarDetailsPanel;