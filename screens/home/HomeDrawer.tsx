import {createDrawerNavigator} from "@react-navigation/drawer";
import BookingScreen from "../booking/BookingScreen";
import MyBookingsScreen from "../profile/MyBookingsScreen";
import {Button, View} from "react-native";
import {useEffect, useState} from "react";

export default function HomeDrawer({navigation}) {
    const Drawer = createDrawerNavigator();
    const [signOut, setSignOut] = useState(false);

    const handleSignOut = () => {
        setSignOut(true);
        navigation.navigate('SignedOut');
    }

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
                <View style={{marginRight: 30}}>
                    <Button title="Sign Out" onPress={handleSignOut}/>
                </View>
            ),
            gestureEnabled: false
        })}>
            <Drawer.Screen name="Booking" component={BookingScreen}/>
            <Drawer.Screen name="MyBookings" component={MyBookingsScreen}/>
        </Drawer.Navigator>
    )
}