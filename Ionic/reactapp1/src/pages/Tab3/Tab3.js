import React from 'react';
import { IonContent, IonToolbar, IonTitle, IonHeader, IonPage } from '@ionic/react';

class Tab3 extends React.Component {

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Tab Three</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <code>This is so cool!</code>
                </IonContent>
            </IonPage>
        );

    }

}

export default Tab3;