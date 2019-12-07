import React from 'react';
import { IonContent, IonToolbar, IonTitle, IonHeader, IonPage, IonButtons, IonMenuButton } from '@ionic/react';
import Header from '../components/Header';

class TestPage extends React.Component {

    constructor(props){
        super(props);
        this.state= { message: ''};
    }

    render() {
        return (
            <IonPage>
                <Header title="Test Me"></Header>
                <IonContent>
                    <code>This is test!</code>
                </IonContent>
            </IonPage>
        );

    }

}

export default TestPage;