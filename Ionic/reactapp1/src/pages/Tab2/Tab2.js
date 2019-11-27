import React from 'react';
import {
    IonContent,
    IonToolbar,
    IonTitle, 
    IonHeader, 
    IonPage,
    IonList,
    IonTabBar, IonItem, IonLabel
} from '@ionic/react';

class Tab2 extends React.Component {

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Tab Two</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem routerLink="/tab2/details">
                            <IonLabel>Go to detail</IonLabel>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonPage>
        );

    }

}

export default Tab2;