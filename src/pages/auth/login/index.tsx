import { useAuth } from "../../../core/auth/auth.hook";
import { useHistory } from "react-router-dom";


function Login() {

    const { isAuth, login } = useAuth();
    const history = useHistory();
    if (isAuth) history.push("/"); // if enter to the loggin register page, cant enter to login page
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
        };
        login(user);
        .then(() => history.push("/user")); //before login, have to navigate

    return (
        <form onSubmit={handleLogin}>
            <input type="email" placeholder="Introduzca su email"></input>
            <input type="password" placeholder="Introduzca password"></input>
            <button type="submit">Login</button>
        </form>
    )
}


export default Login;
