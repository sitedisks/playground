import React from 'react';
import { IonPage, IonAvatar, IonLabel, IonButton, IonContent, IonChip, IonTextarea } from '@ionic/react'
import { RouteComponentProps } from 'react-router-dom';
import Header from '../components/Header';
import Comment from '../components/Comment';
// import * as showdown from 'showdown';
import { CONFIG } from '../constants';
import "./Article.css"
import { thisExpression } from '@babel/types';

class ArticlePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: '',
            author: '',
            comments: [],
            comment: ''
        }

    }

    fetchArticle(url) {
        let headers;
        headers = { "Content-Type": "application/json" };
        var article = fetch(url, {
            method: 'GET',
            headers: headers
        }).then((res) => res.json());
        return article;
    }

    componentDidMount() {
        // console.log(this.props);
        let url = CONFIG.API_ENDPOINT + 'articles/' + this.props.match.params.slug;
        // console.log(url);
        let commentUrl = url + '/comments';
        Promise.all([this.fetchArticle(url), this.fetchArticle(commentUrl)]).then(
            (result) => {
                console.log(result);
                this.setState({
                    article: result[0].article,
                    author: result[0].article.author,
                    comments: result[1].comments
                });
            }
        )

    }

    render() {
        let article = this.state.article;
        let author = this.state.author;

        return (
            <IonPage>
                <Header title="Article"></Header>
                <IonContent padding>
                    <div className="ion-padding-left ion-padding-right">
                        <div className="artice-title">{article.title}</div>
                        <div className="article-description">{article.description}</div>

                        <IonChip>
                            <IonAvatar>
                                <img src={author.image} />
                            </IonAvatar>
                            <IonLabel>{author.username}</IonLabel>
                        </IonChip>
                        <IonChip>
                            {new Intl.DateTimeFormat('en-AU', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(article.createdAt ? article.createdAt : 0))}
                        </IonChip>

                        <hr />

                        <div dangerouslySetInnerHTML={{ __html: article.body }}></div>
                    </div>

                    <hr className="horizontal-line" />
                    {this.state.comments.length > 0 ?
                        <div>
                            {this.state.comments.map((art, index) =>
                                <Comment
                                    key={art.id} body={art.body}
                                    createdAt={art.createdAt} commentId={art.id}
                                    username={art.author.username}
                                />
                            )}
                        </div> :
                        <p className="ion-text-center">No comments</p>}

                </IonContent>
            </IonPage>
        )
    }
}

export default ArticlePage;