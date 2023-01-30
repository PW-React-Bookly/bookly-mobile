import {LoginInterface} from "./loginInterface";
// @ts-ignore
import {BACKEND_URL} from '@env';

const postLogin = async (email: string, password: string) => {

    try {
        const url =  BACKEND_URL + '/users/login';
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(createLogin(email, password))
        });
        if (!response.ok)
            throw Error(response.statusText);
        return response.json();
    } catch (error) {
        console.log(error);
        return '';
    }
}

const createLogin = (email: string, password: string) => {
    const request: LoginInterface = {
        email: email,
        password: password
    }
    return request;
}

export default postLogin;