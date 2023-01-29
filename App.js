// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from "./screens/sign/SignUpScreen";
import SignInScreen from "./screens/sign/SignInScreen";
import SignedOutScreen from "./screens/sign/SignedOutScreen";
import HomeDrawer from "./screens/home/HomeDrawer";
import {RecoilRoot} from "recoil";


const Stack = createNativeStackNavigator();

function App() {
    return (
        <RecoilRoot>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SignedOut">
                    <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{headerShown: false}}/>
                    <Stack.Screen name="SignUp" component={SignUpScreen}/>
                    <Stack.Screen name="SignIn" component={SignInScreen}/>
                    <Stack.Screen name="SignedOut" component={SignedOutScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </RecoilRoot>
    );
}

export default App;