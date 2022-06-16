import { UserLogin } from "./auth.model";
import { UserRegister } from "./auth.model";

const generateAuthPostRequest = (user: UserLogin) => (
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }
)

/**
 * Given a user (email, password and age)
 */

export const registerAPI = async (user: UserRegister) => {   

    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/register`, generateAuthPostRequest(user))
}

export const validateTokenAPI = async (token: string) => {
    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/validate?token=${token}`);
}

export const loginAPI = async (user: UserLogin) => {
    const r = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, generateAuthPostRequest(user));
    if(!r.ok) throw new Error(r.status.toString());
    return await r.json();
}