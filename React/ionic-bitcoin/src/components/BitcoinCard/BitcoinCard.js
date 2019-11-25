import React from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonSkeletonText,
    IonContent
} from '@ionic/react';

import './BitcoinCard.css';

export const BitcoinCard = (props) => (
    <IonCard>
        <IonCardHeader>
            <IonCardSubtitle>
                {props.data.description}
            </IonCardSubtitle>
            <IonCardTitle>
                {props.data.rate_float}{props.data.code}
            </IonCardTitle>
        </IonCardHeader>
        
    </IonCard>
);

