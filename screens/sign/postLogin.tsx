import {LoginInterface} from "./loginInterface";

const postLogin = async (email: string, password: string) => {

    const backendUrl = `http://localhost:8080`; // TODO Make an env value out of it for God's sake
    const url =  backendUrl + '/users/login';

    try {
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