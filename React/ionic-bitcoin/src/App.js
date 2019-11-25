import React from 'react';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/react';
import {card, logo_bitcoin} from 'ionicons/icons';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import { LoadingCard } from './components/LoadingCard/LoadingCard';
import { BitcoinCard } from './components/BitcoinCard/BitcoinCard';
import { getBitcoinPrice } from './api/Bitcoin';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bitcoinInfo: {},
      loading: true
    };
  }

  async componentDidMount() {
    const bitcoinInfo = await getBitcoinPrice();
    this.setState({
      bitcoinInfo,
      loading: false,
    }, () => console.log(this.state));
  }

  createLoadingCards() {
    return (
      <>
        <LoadingCard></LoadingCard>
        <LoadingCard></LoadingCard>
        <LoadingCard></LoadingCard>
      </>
    );
  }

  createBitcoinCards(bitcoinInfo){
    return Object.keys(bitcoinInfo.bpi).map((item,index) =>(
      <BitcoinCard key={index} data={bitcoinInfo.bpi[item]}/>
    ))
  }

  render() {

    return (
      <IonApp>

        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>BitCoin Price Tracker</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
     
          <IonIcon icon={card} className="bitcoin__logo"></IonIcon>
          {
            this.state.loading === true ?
              this.createLoadingCards() : 
              this.createBitcoinCards(this.state.bitcoinInfo)
          }
        </IonContent>

      </IonApp>
    );
  }
}

export default App;
