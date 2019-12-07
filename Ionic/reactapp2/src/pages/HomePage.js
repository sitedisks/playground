import React from 'react';
import { IonPage, IonContent, IonSegment, IonSegmentButton, IonLabel, IonList } from '@ionic/react';
import ArticleCard from '../components/ArticleCard';
import Header from '../components/Header';
import { CONFIG } from '../constants';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { articles: [], segment: "Global" };
    }

    componentDidMount() {
        fetch(CONFIG.API_ENDPOINT + "articles")
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    articles: res.articles,
                    segment: "Global"
                })
            },
                (err) => {
                    console.error(err);
                }
            )
    }

    render() {
        return (
            <IonPage>
                <Header title="Home"></Header>
                <IonContent>
                    <IonList>
                        {this.state.articles.map(article =>

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


                        )}
                    </IonList>
                </IonContent>
            </IonPage>
        );

    }

}

export default HomePage;