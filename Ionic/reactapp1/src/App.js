import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import Tab1 from './pages/Tab1/Tab1';
import Tab2 from './pages/Tab2/Tab2';
import Tab3 from './pages/Tab3/Tab3';
import Details2 from './pages/Tab2/Details';
import Details3 from './pages/Tab3/Details';
import { IonReactRouter } from '@ionic/react-router'
import { apps, flash, send, aperture, paper, person} from 'ionicons/icons';
import logo from './logo.svg';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import './App.css';

class App extends React.Component {

  render() {
    return (
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/" exact component={Tab2}></Route>
              <Route path="/tab1" component={Tab1}></Route>
              <Route path="/tab2" exact component={Tab2}></Route>
              <Route path="/tab2/details" component={Details2}></Route>
              <Route path="/tab3" exact component={Tab3}></Route>
              <Route path="/tab3/details" component={Details3}></Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tab1">
                <IonIcon icon={aperture} />
                <IonLabel>Camera</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tab2">
                <IonIcon icon={paper} />
                <IonLabel>News</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/tab3">
                <IonIcon icon={person} />
                <IonLabel>Me</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    );

  }

}

export default App;
