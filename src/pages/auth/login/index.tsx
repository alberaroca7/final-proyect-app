import { useAuth } from "../../../core/auth/auth.hook";
import { useHistory } from "react-router-dom";
import { IonButton, IonInput, IonPage } from "@ionic/react";


function Login() {

    const { isAuth, login } = useAuth();
    const history = useHistory();

    if (isAuth) history.push("/");
    // if enter to the loggin register page, cant enter to login page
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
        };
        login(user)
            .then(() => history.push("/user")); //before login, have to navigate
    }

    return (
        <IonPage>
            <form onSubmit={handleLogin}>
                <IonInput name="email" type="text" placeholder="Introduzca su email"></IonInput>
                <IonInput name="password" type="password" placeholder="Introduzca password"></IonInput>
                <IonButton type="submit">Login</IonButton>
            </form>
        </IonPage>
        
    )

}


export default Login;
