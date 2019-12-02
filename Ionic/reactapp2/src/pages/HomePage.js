import React from 'react';
import { IonContent, IonSegment, IonSegmentButton, IonLabel, IonList } from '@ionic/react';
import Header from '../components/Header';
import { CONFIG } from '../constants';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { articles: [], segment: "Global" };
    }

    componentDidMount(){
        fetch(CONFIG.API_ENDPOINT + "articles")
        .then(res=>res.json())
        .then((res)=>{
            this.setState({
                articles: res.articles,
                segment: "Global"
            })
        },
        (err)=>{
            console.error(err);
        }
        )
    }

    render() {
        return (
            <>
                <Header title="Home"></Header>
                <IonContent>
                    <IonList>
                        {this.state.articles.map(article=>
                            article.title

                        )}
                    </IonList>
                </IonContent>
            </>
        );

    }

}

export default HomePage;