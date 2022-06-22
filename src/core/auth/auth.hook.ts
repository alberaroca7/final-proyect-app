import { useIonLoading } from "@ionic/react";
import { useState } from "react";
import { useLocation } from "react-router";
import { registerAPI, loginAPI, validateTokenAPI } from "./auth.api"
import { UserLogin, UserRegister } from "./auth.model";
import { AUTH_STORAGE_KEY } from "./auth.utils";


/**
 * It is responsible for all the user authentication gestion.
 * - Exhibit the Auth funtions
 * - Exhibit the token and the gestion of save the token (JWT)
 * 
 * ¿Who wants to return?
 *    - if the user is logged or not
 *    - if the user is carged or not
 *    - register function
 *    - login function
 *    - validate function
 */


export const useAuth = () => {

    const [isAuth, updateIsAuth] = useState(sessionStorage.getItem(AUTH_STORAGE_KEY) !== null);
    const [present, dismiss] = useIonLoading();


    const register = async (user: UserRegister) => {
        present(); // start the loading
        await registerAPI(user);
        dismiss(); // when I finish calling the API, i stop the loading
    }


    const login = async (user: UserLogin) => {
        present(); // start the loading
        const token = await loginAPI(user);
        updateIsAuth(true);
        sessionStorage.setItem(AUTH_STORAGE_KEY, token.access_token);
        dismiss(); // when I finish calling the API I stop the loading
    }


    const validate = async (token: any) => {
        present(); // start the loading
        await validateTokenAPI(token);
        dismiss(); // when I finish calling the API I stop the loading
    }

    return {
        isAuth,
        register,
        login,
        validate
    }


}

export const useQuery = () => {

    const { search } = useLocation();
    return new URLSearchParams(search);
}
