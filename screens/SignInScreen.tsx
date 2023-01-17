import {TextInput, View, StyleSheet, Text, Pressable} from "react-native";

function SignInScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Enter your email and password</Text>
            <TextInput
                style={styles.inputStyle}
                placeholder="Email" />
            <TextInput
                style={styles.inputStyle}
                secureTextEntry={true}
                placeholder="Password"
            />
            <Pressable onPress={() => navigation.navigate('HomeDrawer')} style={styles.button}>
                <Text style={styles.btnText}>Sign in</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    button: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    btnText:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    inputStyle: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#DCDCDC',
    },
    formText: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 20,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
});

export default SignInScreen;