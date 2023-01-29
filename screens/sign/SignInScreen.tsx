import {TextInput, View, StyleSheet, Text, Pressable} from "react-native";
import {Formik, FormikHelpers, FormikValues} from "formik";
import * as yup from "yup";
import postLogin from "./postLogin";
import {useRecoilState} from "recoil";
import {tokenAtom} from "../../utils/recoil/tokenAtom";

function SignInScreen({ navigation }) {

    const [_, setToken] = useRecoilState(tokenAtom);

    const handleFormSubmit = async (values: FormikValues, actions: FormikHelpers<FormikValues>, navigation) =>{
        const result = await postLogin(values['email'], values['password']);
        if(result !== '') {
            setToken(result.token);
            navigation.navigate('HomeDrawer');
        }
        else
            actions.resetForm();
    }

    const registrationValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please enter valid email")
            .required('Email Address is required'),
        password: yup
            .string()
            .required('Password is required'),
    })

    return (
        <View style={styles.container}>
            <Formik
                validationSchema={registrationValidationSchema}
                initialValues={{email: '', password: ''}}
                onSubmit={(values, actions) => handleFormSubmit(values, actions,navigation)}
            >
                {({
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      values,
                      errors,
                      touched,
                      isValid
                  }) => (
                    <>
                        <Text>Sign in</Text>
                        <TextInput
                            maxLength={30}
                            style={styles.inputStyle}
                            placeholder="Email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"/>
                        {errors.email && touched.email &&
                            <Text style={styles.errorText}>{errors.email}</Text>
                        }
                        <TextInput
                            maxLength={30}
                            style={styles.inputStyle}
                            secureTextEntry={true}
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                        {errors.password && touched.password &&
                            <Text style={styles.errorText}>{errors.password}</Text>
                        }
                        <Pressable onPress={() => handleSubmit()}
                                   style={isValid ? styles.button : styles.buttonDisabled} disabled={!isValid}>
                            <Text style={styles.btnText}>Sign in</Text>
                        </Pressable>
                    </>
                )}
            </Formik>
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
    buttonDisabled:{
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#888',
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
    errorText:{
        fontSize: 10,
        color: 'red',
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
});

export default SignInScreen;