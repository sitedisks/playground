import React from 'react';
import { IonAvatar, IonItem, IonIcon, IonLabel, IonGrid, IonCol, IonRow, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react'

import { Link } from 'react-router-dom';
import { CONFIG } from '../constants';
import { add, remove} from 'ionicons/icons';

class ArticleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorited: this.props.favorited,
            favoritesCount: this.props.favoritesCount
        }
        this.routeLink = '/article/' + this.props.slug;
        this.profileLink = '/profile/' + this.props.author;

    }

    favoritedArticle = (params)=>{}

    loggedInCard() {
        return (
            <IonItemSliding>
                {this.loggedOutCard()}
            </IonItemSliding>
        )
    }

    loggedOutCard() {
        return (<IonItem>
            <IonAvatar slot="start">
                <img src={this.props.src} />
            </IonAvatar>
            <IonLabel>
                <p className="title">{this.props.title}</p>
                <IonGrid>
                    <IonRow>
                        <IonCol class="author" size="6">
                            <Link className="link" to={this.profileLink}>{this.props.author}</Link>
                        </IonCol>
                        <IonCol size="6" text-right>
                            <Link className="link" to={this.routeLink}>Read More</Link>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonLabel>
        </IonItem>)
    }

    render() {
        return (
            <>
                {localStorage.getItem("isLogin") === "true" ? this.loggedInCard() : this.loggedOutCard()}
            </>
        )
    }
}

export default ArticleCard;