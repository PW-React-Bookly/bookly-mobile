import {Pressable, StyleSheet, Text, View} from "react-native";

function SignedOutScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('SignIn')}
                       style={styles.button}>
                <Text style={styles.btnText}>Sign in</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('SignUp')}
                       style={styles.button}>
                <Text style={styles.btnText}>Sign up</Text>
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
});

export default SignedOutScreen;