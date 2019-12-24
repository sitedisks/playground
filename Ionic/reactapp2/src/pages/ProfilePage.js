import React from 'react';
import { IonIcon, IonLabel, IonContent, IonChip, IonItemDivider, IonToast, IonPage, } from '@ionic/react'
import { RouteComponentProps } from 'react-router-dom';
import "./Article.css";
import Header from '../components/Header';
import ArticleCard from '../components/ArticleCard';
import { CONFIG } from '../constants';
import { add, remove, settings } from 'ionicons/icons';
import ArticlePage from './ArticlePage';

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

    fetchArticles(url) {
        let headers;
        if (localStorage.getItem("isLogin") && localStorage.getItem("isLogin") === "true") {
            headers = {
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.getItem("token")
            }
        } else {
            headers = {
                "Content-Type": "application/json"
            }
        }

        return fetch(url, {
            method: 'GET',
            headers: headers
        }).then((res) => res.json())
    }

    componentDidMount() {
        let profileUrl = CONFIG.API_ENDPOINT + "profiles/" + this.props.match.params.authorname;
        let artilcesbyProfileUrl = CONFIG.API_ENDPOINT + "articles/?author=" + this.props.match.params.authorname;
        let favoritedArticlesUrl = CONFIG.API_ENDPOINT + "articles/?favorited=" + this.props.match.params.authorname;

        Promise.all([this.fetchArticles(profileUrl), this.fetchArticles(artilcesbyProfileUrl), this.fetchArticles(favoritedArticlesUrl)]).then((results) => {
            console.log(results);
            this.setState({
                profile: results[0].profile,
                articlesFavorites: results[2].articles,
                articlesAuthor: results[1].articles,
                isFollowing: results[0].profile.following
            });
        }).catch(err => {
            console.error(err);
        })
    }

    settings = (e)=>{
        this.props.history.push('/settings');
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
                        <img src={this.state.profile.image} alt="logo" width="30%" />
                    </div>
                    <div className="ion-padding-left ion-padding-right ion-text-center">
                        <div className="article-title">{this.state.profile.username}</div>
                        <div className="article-description">{this.state.profile.bio}</div>
                        <hr />
                        {localStorage.getItem("isLogin") === "true" ? <>
                            {localStorage.getItem("username") === this.state.profile.username ?
                                <IonChip onClick={this.settings}>
                                    <IonIcon icon={settings} color="primary" />
                                    <IonLabel>Settings </IonLabel>
                                </IonChip> :
                                <IonChip>
                                    <IonIcon icon={this.state.isFollowing ? remove : add} color="primary"></IonIcon>
                                    <IonLabel>{this.state.isFollowing ? "Unfollow" : "Follow"}</IonLabel>
                                </IonChip>}
                        </> : <></>}

                        <IonItemDivider>
                            <IonLabel>Articles by Author</IonLabel>
                        </IonItemDivider>

                        {this.state.articlesAuthor.map((article, index) =>
                            <ArticleCard
                                key={article.slug}
                                title={article.title}
                                src={article.author.image}
                                description={article.description}
                                favorited={article.favorited}
                                favoritesCount={article.favoritesCount}
                                slug={article.slug}
                                author={article.author.username}
                            ></ArticleCard>)}

                        <IonItemDivider>
                            <IonLabel>Favorites</IonLabel>
                        </IonItemDivider>
                        {
                            this.state.articlesFavorites.map((article, index) =>
                                <ArticleCard
                                    key={article.slug}
                                    title={article.title}
                                    src={article.author.image}
                                    description={article.description}
                                    favorited={article.favorited}
                                    favoritesCount={article.favoritesCount}
                                    slug={article.slug}
                                    author={article.author.username}
                                ></ArticleCard>
                            )
                        }
                    </div>
                </IonContent>
            </IonPage>
        );
    }
}
export default ProfilePage;