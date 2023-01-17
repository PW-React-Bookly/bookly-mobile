import {Button, View} from "react-native";

function SignedOutScreen({ navigation }) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button title="Sing In" onPress={() => navigation.navigate('SignIn')}/>
            <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')}/>
        </View>
    );
}

export default SignedOutScreen;