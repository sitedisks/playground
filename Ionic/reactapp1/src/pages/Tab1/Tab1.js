import React from 'react';
import { IonContent, IonToolbar, IonTitle, IonHeader, IonPage } from '@ionic/react';
import './Tab1.css';

class Tab1 extends React.Component {

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Tab One</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <code>This is so cool!</code>
                </IonContent>
            </IonPage>
        );

    }

}

export default Tab1;