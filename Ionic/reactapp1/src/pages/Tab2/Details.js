import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/react';

class Details extends React.Component {
    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/tab2" />
                        </IonButtons>
                        <IonTitle>Detail</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <p>Details</p>
                </IonContent>
            </IonPage>
        );

    }
}

export default Details;