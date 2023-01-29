import {useEffect} from "react";
import {View} from "react-native";

const SignOutPrompt = ({navigation}) => {

    useEffect(() => navigation.navigate('SignedOut'));

    return(<View/>)
}

export default SignOutPrompt;