import React from 'react';
import {
    IonContent,
    IonToolbar,
    IonTitle,
    IonHeader,
    IonPage,
    IonIcon,
    IonList,
    IonItem, 
    IonLabel, 
    IonCard, 
    IonCardTitle, 
    IonCardContent, 
    IonCardSubtitle, 
    IonCardHeader,
    IonSkeletonText
} from '@ionic/react';

import CardPlaceholder from './CardPlaceholder';
import { Plugins, LocalNotifications } from '@capacitor/core';
import { config } from '@ionic/core';
import { CONFIG } from '../constants';
import {apps} from 'ionicons/icons'

const { Browser } = Plugins;

class Tab2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

    componentDidMount() {
        // example: https://newsapi.org/v2/top-headlines?country=cn&category=technology&page=2&apiKey=60b923e5e58c4b9d88122c0a9d2ad60b
        fetch(CONFIG.API_ENDPOINT + '?country=au&category=technology&page=1&apiKey=' + CONFIG.API_KEY)
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        news: res.articles
                    });
                },
                (err) => {
                    console.error(err);
                }
            );
    }

    renderCards() {
        return (

            this.state.news.map((article, index) =>
                        <IonCard key={index} onClick={async ()=>{await Browser.open({ url: article.url })}}>
                            <img src={article.urlToImage} />
                            <IonCardHeader>
                                <IonCardSubtitle>{article.publishedAt}</IonCardSubtitle>
                                <IonCardTitle>{article.title}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {article.description}
                            </IonCardContent>
                        </IonCard>
                    )
        );

    }

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>News</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
        {this.state.news.length==0? 
        <>
            <CardPlaceholder />
            <CardPlaceholder />
            <CardPlaceholder /></>
            :this.state.news.map((article, index) =>
                        <IonCard key={index} onClick={async ()=>{await Browser.open({ url: article.url })}}>
                            <img src={article.urlToImage} />
                            <IonCardHeader>
                                <IonCardSubtitle>{article.publishedAt}</IonCardSubtitle>
                                <IonCardTitle>{article.title}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {article.description}
                            </IonCardContent>
                        </IonCard>
                    )
                    }
                </IonContent>
            </IonPage>
        );

    }

}

export default Tab2;