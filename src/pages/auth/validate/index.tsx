import { useHistory, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../../core/auth/auth.hook";
import { IonItem, IonLabel, IonPage, IonTitle, useIonViewWillEnter } from "@ionic/react";
import { useQuery } from "../../../core/auth/auth.hook";



const Validate = () => {

    const { isAuth, validate } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const query = useQuery();
    if (isAuth) history.push("/"); // if enter to register page (login), not permit to enter to register page and redirect to home page

    useIonViewWillEnter(() => {
        validate(query.get("token") ?? "")
    }, [location]);

    return (
        <IonPage>
            <IonTitle>Su email se ha validado con éxito. Ya puedes hacer login</IonTitle>
            {/* <Link to={'/auth/login'}>Ir a Login</Link> */}
            <IonItem routerLink="">
                <IonLabel>Ir a login</IonLabel>
            </IonItem>
        </IonPage>
    )
}

export default Validate;
