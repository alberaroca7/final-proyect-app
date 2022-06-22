import React from "react";
import { IonContent, IonFooter, IonToolbar, IonTitle, IonPage, IonItem, IonIcon, IonText, IonNav, IonNavLink } from '@ionic/react';

export const Footer: React.FC = () => {

    return (
        <>

            {/*-- Footer without a border --*/}
            < IonFooter className="ion-footer" >
                <IonItem className="footer-left">
                    <IonTitle>LOGO</IonTitle>
                    <IonText>Company Name © 2022</IonText>
                </IonItem>
                <IonItem className="footer-center">
                    <IonItem>
                        <IonIcon></IonIcon>
                        <IonText>+34 9949494949494</IonText>
                    </IonItem>
                    <IonItem>
                        <IonIcon></IonIcon>
                        <IonText>support@company.com</IonText>
                    </IonItem>
                </IonItem>
                <IonItem className="footer-right">
                    <IonItem routerLink="" >
                        <IonIcon>Facebook</IonIcon>
                    </IonItem>
                    <IonItem routerLink="">
                        <IonIcon>Linkedin</IonIcon>
                    </IonItem>
                    <IonItem routerLink="">
                        <IonIcon>Github</IonIcon>
                    </IonItem>
                </IonItem>
            </IonFooter >


        </>
    );
}