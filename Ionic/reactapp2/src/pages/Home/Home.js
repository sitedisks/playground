import React from 'react';
import { IonContent, IonToolbar, IonTitle, IonHeader, IonPage, IonButtons, IonMenuButton, IonButton, IonAlert } from '@ionic/react';
import { Plugins } from '@capacitor/core';

const { Browser, Modals, Toast } = Plugins;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAlert: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.showPrompt = this.showPrompt.bind(this);
    }

    async showToast() {
        await Toast.show({
            text: 'Hello!'
        });
    };

    async showPrompt() {
        let promptRet = await Modals.prompt({
            title: 'Hello',
            message: 'What\'s your name?'
        });
        console.log('Prompt ret', promptRet);
    };

    async handleClick(e) {
        console.log('clicked');
        await Browser.open({ url: 'http://capacitor.ionicframework.com/' });
    }

    render() {
        const isShow = this.state.showAlert;

        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Tab Home</IonTitle>

                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonButton onClick={() => this.setState({ showAlert: true })} expand="block">Show Alert</IonButton>
                    <IonAlert
                        isOpen={this.state.showAlert}
                        onDidDismiss={() => this.setState({ showAlert: false })}
                        header={'Alert'}
                        subHeader={'Subtitle'}
                        message={'This is an alert message.'}
                        buttons={['OK']}
                    />
                    {
                        !isShow &&
                        <IonButton color="tertiary" onClick={this.handleClick} expand="block">Tertiary</IonButton>
                    }

                    <IonButton onClick={this.showPrompt} expand="block">Native Prompt</IonButton>
                    <IonButton onClick={this.showToast} expand="block">Native Toast</IonButton>

                </IonContent>
            </IonPage>
        );

    }

}

export default Home;