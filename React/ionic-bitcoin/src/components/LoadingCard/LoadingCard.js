import React from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonSkeletonText
} from '@ionic/react';

import './LoadingCard.css';

export const LoadingCard = () => (
    <IonCard>
        <IonCardHeader>
            <IonCardSubtitle>
                <IonSkeletonText animated className='loading-card__currency-name'></IonSkeletonText>
            </IonCardSubtitle>
            <IonCardTitle>
                <IonSkeletonText animated className='loading-card__currency-value'></IonSkeletonText>

            </IonCardTitle>
        </IonCardHeader>
    </IonCard>
);

