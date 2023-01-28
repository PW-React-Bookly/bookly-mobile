// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import SignedOutScreen from "./screens/SignedOutScreen";
import HomeDrawer from "./screens/home/HomeDrawer";


const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeDrawer">
                <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{headerShown: false}}/>
                <Stack.Screen name="SignUp" component={SignUpScreen}/>
                <Stack.Screen name="SignIn" component={SignInScreen}/>
                <Stack.Screen name="SignedOut" component={SignedOutScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;