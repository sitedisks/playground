import React from 'react';
import { IonContent, IonToolbar, IonTitle, IonHeader, IonPage, IonButtons, IonMenuButton } from '@ionic/react';

class List extends React.Component {

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Tab List</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <code>This is so cool!</code>
                </IonContent>
            </IonPage>
        );

    }

}

export default List;