import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonImg,
    IonFab,
    IonFabButton,
    IonIcon
} from '@ionic/react';
import { Plugins, CameraResultType } from '@capacitor/core';
import './Tab1.css';

const { Camera } = Plugins;

class Tab1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { photo: '' };
    }

    async takePicture() {
        console.log('button clicked');
        const image = await Camera.getPhoto({

            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.Uri
        });

        var imageUrl = image.webPath;

        //can be set to the src of an image now
        this.setState({ photo: imageUrl});
    };

    render() {
        const photo = this.state.photo;
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Ionic Camera</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonImg src={photo} style={{ 'border': '1px solid black', 'minHeight': '100px' }} />
                    <IonFab color="primary" vertical="bottom" horizontal="center" slot="fixed">
                        <IonFabButton color="primary" onClick={() => this.takePicture()}>
                            <IonIcon name="add" />
                        </IonFabButton>
                    </IonFab>
                </IonContent>
            </IonPage>
        );

    }

}

export default Tab1;