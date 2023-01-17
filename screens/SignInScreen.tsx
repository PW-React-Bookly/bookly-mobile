import {Button, View} from "react-native";

function SignInScreen({ navigation }) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button title="Sign in" onPress={() => navigation.navigate('HomeDrawer')}/>
        </View>
    );
}

export default SignInScreen;