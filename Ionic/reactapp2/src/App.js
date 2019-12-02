import React from 'react';

import '@ionic/react/css/core.css';
import '@ionic/react/css/ionic.bundle.css';
import './App.css';

import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonContent,
  IonMenuToggle,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';

import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/Home/Home';
import HomePage from './pages/HomePage';
import List from './pages/List/List';

import { home, list } from 'ionicons/icons';



class App extends React.Component {

  render() {
    return (
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">

            <IonMenu contentId="main" type="reveal">
              <IonHeader>
                <IonToolbar>
                  <IonTitle>Menu</IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent>
                <IonList>
                  <IonMenuToggle>
                  <IonItem routerLink="/homepage">
                      <IonIcon icon={home}></IonIcon>
                      <IonLabel>Home Page</IonLabel>
                    </IonItem>
                    <IonItem routerLink="/home">
                      <IonIcon icon={home}></IonIcon>
                      <IonLabel>Home</IonLabel>
                    </IonItem>
                    <IonItem routerLink="/list">
                      <IonIcon icon={list}></IonIcon>
                      <IonLabel>List</IonLabel>
                    </IonItem>
                  </IonMenuToggle>
                </IonList>
              </IonContent>
            </IonMenu>

            <IonRouterOutlet id="main">
              <Route path="/homepage" component={HomePage} />
              <Route path="/home" component={Home} />
              <Route path="/list" component={List} />
              <Route path="/" component={Home} exact />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    );
  };

}

export default App;
