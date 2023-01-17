import {Button, View} from "react-native";

function SignUpScreen({ navigation }) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button title="Sign Up" onPress={() => navigation.navigate('HomeDrawer')}/>
        </View>
    );
}

export default SignUpScreen;