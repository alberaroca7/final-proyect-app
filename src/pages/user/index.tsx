import { useUser } from "../../core/users/user.hook";
import React from "react";
import { IonItem, IonPage, IonText, IonTitle } from "@ionic/react";


const User: React.FC = () => {
    const { user } = useUser();

    return (

        <IonPage>
            <IonItem>
                <IonTitle>User: </IonTitle>
                <IonText>{user?.email}</IonText>
                <IonText>{user?.password}</IonText>
            </IonItem>
        </IonPage>
    )

}

export default User;
