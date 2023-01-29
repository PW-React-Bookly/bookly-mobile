import {createDrawerNavigator} from "@react-navigation/drawer";
import BookingScreen from "../booking/BookingScreen";
import MyBookingsScreen from "../profile/MyBookingsScreen";
import {View} from "react-native";
import {useEffect} from "react";
import SignOutPrompt from "../sign/SignOutPrompt";

export default function HomeDrawer({navigation}) {
    const Drawer = createDrawerNavigator();
    useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                if (e.data.action.type !="GO_BACK") {
                    //"GO_BACK" is emitted by hardware button
                    navigation.dispatch(e.data.action);
                } else {
                    e.preventDefault();
                }
            }),
        [navigation]
    );
    return (
        <Drawer.Navigator initialRouteName="Booking" screenOptions={({navigation}) => ({
            headerRight: () => (
                <View style={{marginRight: 30}}/>
            ),
            gestureEnabled: false
        })}>
            <Drawer.Screen name="Booking" component={BookingScreen}/>
            <Drawer.Screen name="MyBookings" component={MyBookingsScreen}/>
            <Drawer.Screen name="SignOut" component={SignOutPrompt}/>
        </Drawer.Navigator>
    )
}