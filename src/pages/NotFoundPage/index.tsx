import { IonItem, IonPage, IonTitle } from '@ionic/react';
import './style.css'

const NotFoundPage: React.FC = () => {

    return (
        <IonPage>
            <IonItem className="not-found">
                <IonTitle>404</IonTitle>
                <IonTitle size='small'>Page not found</IonTitle>
            </IonItem>
        </IonPage>
    )
}

export default NotFoundPage;