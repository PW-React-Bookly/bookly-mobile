import {UserInterface} from "./userInterface";
// @ts-ignore
import {BACKEND_URL} from '@env';

const postUser = async (name: string, surname: string, email: string, password: string) => {

    try {
        const url =  BACKEND_URL + '/users';
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(createUser(name, surname, email, password))
        });
        if (!response.ok)
            throw Error(response.statusText);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const createUser = (name: string, surname: string, email: string, password: string) => {
    const request: UserInterface = {
        firstName: name,
        lastName: surname,
        email: email,
        password: password,
        isActive: true
    }
    return request;
}

export default postUser;