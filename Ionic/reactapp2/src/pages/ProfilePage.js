import React from 'react';
import { IonIcon, IonLabel, IonContent, IonChip, IonItemDivider, IonToast, } from '@ionic/react'
import { RouteComponentProps } from 'react-router-dom';
import "./Article.css";
import Header from '../components/Header';
import ArticleCard from '../components/ArticleCard';
import { CONFIG } from '../constants';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: '',
            articlesFavorites: [],
            articlesAuthor: [],
            isFollowing: false,
            toastState: false
        }
    }

    render() {
        return (
            <IonPage>
                <IonToast
                    isOpen={this.state.toastState}
                    onDidDismiss={() => this.setState({ toastState: false })}
                    message={this.state.isFollowing ? 'Following ' + this.state.profile.username : 'Unfollowed ' + this.state.profile.username}
                    duration={400}></IonToast>
                <Header title="Profile"></Header>
                <IonContent padding>
                    <div className="ion-text-center">
                        <img src={} alt="logo" width="30%"/>
                    </div>
                    <div className="ion-padding-left ion-padding-right ion-text-center">


                    </div>
                </IonContent>
            </IonPage>
        );
    }
}
export default ProfilePage;