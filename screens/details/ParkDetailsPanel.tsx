import {View, Text} from "react-native";
import {ParkInterface} from "../interfaces/parkInterface";

const ParkDetailsPanel = (props: {park: ParkInterface}) => {

    return (
        <View>
            <Text>{props.park.description}</Text>
        </View>
    );
}

export default ParkDetailsPanel;