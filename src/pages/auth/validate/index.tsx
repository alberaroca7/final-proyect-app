import { useHistory, useSearchParams, Link } from "react-router-dom";
import { useEffect } from 'react';
import { useAuth } from "../../../core/auth/auth.hook";
import { useIonLoading } from "@ionic/react";


const Validate = () => {

    const [present, dismiss] = useIonLoading();
    const { isAuth, validate } = useAuth();
    const history = useHistory();
    const [searchParams] = useSearchParams();
    if (isAuth) history.push("/"); // if enter to register page (login), not permit to enter to register page and redirect to home page
    useEffect(() => {
        validate(searchParams.get("token"));
    }, [searchParams, validate]);
    return (
        <>
            {
                dismiss 
                    ? <h1>Validando su email...</h1>
                    : (
                        <>
                            <h1>Su email se ha validado con éxito. Ya puedes hacer login</h1>
                            <Link to={'/auth/login'}>Ir a Login</Link>
                        </>
                    )
            }
        </>
    )
}

export default Validate;
