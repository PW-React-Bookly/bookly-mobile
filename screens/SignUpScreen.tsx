import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import { Formik } from 'formik'
import * as yup from 'yup'

function SignUpScreen ({navigation}) {
    return (
        <View style={styles.container}>
            <Formik
                validationSchema={registrationValidationSchema}
                initialValues={{name: '', surname: '', email: '', password: '', passwordConfirmation: ''}}
                onSubmit={() => handleFormSubmit(navigation)}
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
                        <Text>New account registration</Text>
                        <TextInput
                            maxLength={20}
                            style={styles.inputStyle}
                            placeholder="Name"
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}/>
                        {errors.name && touched.name &&
                            <Text style={styles.errorText}>{errors.name}</Text>
                        }
                        <TextInput
                            maxLength={20}
                            style={styles.inputStyle}
                            placeholder="Surname"
                            onChangeText={handleChange('surname')}
                            onBlur={handleBlur('surname')}
                            value={values.surname}/>
                        {errors.surname && touched.surname &&
                            <Text style={styles.errorText}>{errors.surname}</Text>
                        }
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
                        <TextInput
                            maxLength={30}
                            style={styles.inputStyle}
                            secureTextEntry={true}
                            placeholder="Confirm password"
                            onChangeText={handleChange('passwordConfirmation')}
                            onBlur={handleBlur('passwordConfirmation')}
                            value={values.passwordConfirmation}
                        />
                        {errors.passwordConfirmation && touched.passwordConfirmation &&
                            <Text style={styles.errorText}>{errors.passwordConfirmation}</Text>
                        }
                        <Pressable onPress={() => handleSubmit()}
                                   style={isValid ? styles.button : styles.buttonDisabled} disabled={!isValid}>
                            <Text style={styles.btnText}>Sign up</Text>
                        </Pressable>
                    </>
                )}
            </Formik>
        </View>
    );
}

const handleFormSubmit = (navigation) =>{
    navigation.navigate('HomeDrawer');
}

const registrationValidationSchema = yup.object().shape({
    name: yup
        .string()
        .matches(/^[aA-zZ\s]+$/, "Name cannot contain numbers or special characters")
        .min(3, ({ min }) => `Name must be at least ${min} characters`)
        .required('Name is required'),
    surname: yup
        .string()
        .matches(/^[aA-zZ\s]+$/, "Surname cannot contain numbers or special characters")
        .min(3, ({ min }) => `Surname must be at least ${min} characters`)
        .required('Surname is required'),
    email: yup
        .string()
        .email("Please enter valid email")
        .required('Email Address is required'),
    password: yup
        .string()
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    passwordConfirmation: yup.
        string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Password confirmation is required'),
})

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
    btnTextDisabled:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#eee',
    },
    errorText:{
        fontSize: 10,
        color: 'red',
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


export default SignUpScreen;