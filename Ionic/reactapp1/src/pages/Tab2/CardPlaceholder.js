import React from 'react';
import {
    IonCard, 
    IonCardTitle, 
    IonCardContent, 
    IonCardSubtitle, 
    IonCardHeader,
    IonSkeletonText
} from '@ionic/react';

class CardPlaceholder extends React.Component{

    render(){

        return (
            <IonCard>
                <img src="https://via.placeholder.com/300x180" />
                <IonCardHeader>
                    <IonCardSubtitle><IonSkeletonText animated style={{ width: '40%' }}></IonSkeletonText></IonCardSubtitle>
                    <IonCardTitle><IonSkeletonText animated style={{ width: '60%' }}></IonSkeletonText></IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonSkeletonText animated></IonSkeletonText>
                    <IonSkeletonText animated></IonSkeletonText>
                    <IonSkeletonText animated></IonSkeletonText>
                    <IonSkeletonText animated></IonSkeletonText>
                    <IonSkeletonText animated></IonSkeletonText>
                </IonCardContent>
            </IonCard>

        );
    }
}

export default CardPlaceholder;