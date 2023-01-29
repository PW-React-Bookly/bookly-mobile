import {UserInterface} from "./userInterface";

const postUser = async (name: string, surname: string, email: string, password: string) => {

    const backendUrl = `http://localhost:8080`; // TODO Make an env value out of it for God's sake
    const url =  backendUrl + '/users';

    try {
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