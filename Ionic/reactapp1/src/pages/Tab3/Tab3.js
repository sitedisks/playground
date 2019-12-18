import React from 'react';
import { IonContent, 
    IonToolbar, 
    IonTitle, 
    IonHeader, 
    IonPage, 
    IonList,
    IonItem,
    IonIcon,
    IonLabel } from '@ionic/react';
import {apps} from 'ionicons/icons'

class Tab3 extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Settings</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
       
                    <IonList>
                        <IonItem routerLink="/tab3/details">
                            <IonIcon icon={apps} slot="start" />
                            <IonLabel>Author</IonLabel>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonPage>
        );

    }

}

export default Tab3;