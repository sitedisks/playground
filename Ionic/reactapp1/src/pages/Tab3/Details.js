import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonRow, IonCol, IonIcon, IonLabel } from '@ionic/react';
import avatar from '../../images/rsz_peterw.jpg'
import { pizza, logoGithub} from 'ionicons/icons';
import { CONFIG } from '../constants';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

class Details3 extends React.Component {
    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/tab3" />
                        </IonButtons>
                        <IonTitle>Author</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <div className="ion-text-center" onClick={async ()=>{await Browser.open({url: CONFIG.STACKOVERFLOW })}}>
                        <hr/>
                        <IonRow>
                            <IonCol size="3"></IonCol>
                            <IonCol><img src={avatar} alt="logo" width="80%" /></IonCol>
                            <IonCol size="3"></IonCol>
                        </IonRow>
                        <IonLabel>
                            <IonIcon icon={logoGithub} /> Peter W
                        </IonLabel>
                    </div>
                </IonContent>
            </IonPage>
        );

    }
}

export default Details3;