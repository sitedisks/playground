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
    IonIcon,
    IonLabel
} from '@ionic/react';

import { add, pin, share } from 'ionicons/icons';
import { Plugins, CameraResultType } from '@capacitor/core';
import './Tab1.css';

const { Camera, Geolocation, Share, Modals } = Plugins;

class Tab1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { photo: 'https://via.placeholder.com/300x400' };
    }

    async getLocation() {
        console.log('get location');
        const coordinates = await Geolocation.getCurrentPosition();
        console.log('Current', coordinates);
        let confirmRet = await Modals.confirm({
            title: 'GeoLocation',
            message: 'Your location lat: ' + coordinates.coords.latitude
                + ', lng: ' + coordinates.coords.longitude
        });
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
        this.setState({ photo: imageUrl });
    };

    async shareMe() {
        let shareRet = await Share.share({
            title: 'See cool stuff',
            text: 'Really awesome thing you need to see right meow',
            url: 'http://ionicframework.com/',
            dialogTitle: 'Share with buddies'
        });
    }

    render() {
        const photo = this.state.photo;
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Camera</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {photo == null ? <IonLabel>Photo Display Here</IonLabel>:
                        <IonImg src={photo} style={{ 'minHeight': '100px' }} />
                    }

                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                        <IonFabButton color="primary" onClick={() => this.takePicture()}>
                            <IonIcon icon={add} />
                        </IonFabButton>
                    </IonFab>
                    {/* <IonFab vertical="top" horizontal="end" slot="fixed">
                        <IonFabButton color="danger" onClick={() => this.getLocation()}>
                            <IonIcon icon={pin} />
                        </IonFabButton>
                    </IonFab> */}
                    <IonFab vertical="bottom" horizontal="start" slot="fixed">
                        <IonFabButton color="dark" onClick={() => this.shareMe()}>
                            <IonIcon icon={share} />
                        </IonFabButton>
                    </IonFab>
                </IonContent>
            </IonPage>
        );

    }

}

export default Tab1;