import React from 'react';
import { Redirect, Route } from 'react-router-dom';
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
import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/Home/Home';
import List from './pages/List/List';

import { home, list } from 'ionicons/icons';
import '@ionic/react/css/core.css';
import '@ionic/react/css/ionic.bundle.css';


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
