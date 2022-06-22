import React from 'react';
import { IonHeader, IonContent, IonToolbar, IonButtons, IonBackButton, IonTitle, IonPage } from '@ionic/react';

export const Header: React.FC = () => {

    return (
        <>
            {/*-- Header without a border --*/}
            {/* <IonHeader className="ion-no-border">
                <IonToolbar>
                    <IonTitle>Header - No Border</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">My Navigation Bar</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent> */}

            {/*-- Fade Header with collapse header --*/}
            <IonHeader collapse="fade" translucent={true}>
                <IonToolbar>
                    <IonTitle>Header</IonTitle>
                </IonToolbar>
            </IonHeader>

            {/* <IonContent fullscreen={true}>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Header</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent> */}
        </>
    );

}