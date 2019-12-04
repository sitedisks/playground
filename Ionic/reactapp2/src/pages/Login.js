import React from 'react';
import { IonContent } from '@ionic/react';

import Header from '../components/Header';
import { CONFIG } from '../constants';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            toastState: false,
            toastMessage: 'Message',
            action: 'Login',
            email: ''
        };

    }

    render() {
        return (
            <>
                <Header title="Login"></Header>
                <IonContent>
                    <IonToast
                        isOpen={this.state.toastState}
                        onDidDismiss={() => this.setState({ toastState: false })}
                        message={this.state.toastMessage}
                        duration={400}
                    ></IonToast>
                </IonContent>
                <form action="">
                    <IonItem>
                        <IonInput onIonChange={this.updateEmail} type="email" placeholder="Email"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput onIonChange={this.updatePassword} type="password" placeholder="Password"></IonInput>
                    </IonItem>
                </form>

                <IonButton></IonButton>
                
                <IonFooter>
                    <IonToobar text-center>
                        Click here to 
                    </IonToobar>
                </IonFooter>
            </>
        )
    }
}