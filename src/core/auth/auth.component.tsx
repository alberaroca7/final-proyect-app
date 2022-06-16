import { useAuth } from "./auth.hook";
import { useHistory, Redirect } from "react-router-dom";


function RequireAuth({ children }: { children: React.ReactNode }) {
    const { isAuth } = useAuth();
    const history = useHistory();


    if (!isAuth) { // if not auth, redirect to login page
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Redirect to={{ pathname: "auth/login", state: { from: history } }} />;
    }

    return <>{children}</>;

}

export default RequireAuth;