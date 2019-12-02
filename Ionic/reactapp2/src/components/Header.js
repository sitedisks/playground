import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonMenuButton } from '@ionic/react';

class Header extends React.Component {
    render() {
        return (
            <IonHeader>
                <IonToolbar>
                    <IonTitle color="primary">{this.props.title}</IonTitle>
                    <IonMenuButton slot="start"></IonMenuButton>
                </IonToolbar>
            </IonHeader>
        )
    }
}

export default Header