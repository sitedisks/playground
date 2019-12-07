import React from 'react';
import { IonIcon, IonLabel, IonContent, IonChip, IonItemDivider, IonToast,} from '@ionic/react'
import { RouteComponentProps } from 'react-router-dom';
import "./Article.css";
import Header from '../components/Header';
import ArticleCard from '../components/ArticleCard';
import {CONFIG} from '../constants';

class ProfilePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            profile: '',
            articlesFavorites: [],
            articlesAuthor: [],
            isFollowing: false,
            toastState: false
        }
    }

    render(){
        return (
            <IonPage>
                <IonContent>
                    
                </IonContent>
            </IonPage>
        );
    }
}
export default ProfilePage;