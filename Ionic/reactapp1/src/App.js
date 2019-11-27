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
import Details from './pages/Tab2/Details';
import Tab3 from './pages/Tab3/Tab3';
import { IonReactRouter } from '@ionic/react-router'
import { apps, flash, send } from 'ionicons/icons';
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
              <Route path="/" exact component={Tab1}></Route>
              <Route path="/tab1" component={Tab1}></Route>
              <Route path="/tab2" exact component={Tab2}></Route>
              <Route path="/tab2/details" component={Details}></Route>
              <Route path="/tab3" component={Tab3}></Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tab1">
                <IonIcon icon={apps} />
                <IonLabel>Tab One</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tab2">
                <IonIcon icon={flash} />
                <IonLabel>Tab Two</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/tab3">
                <IonIcon icon={send} />
                <IonLabel>Tab Three</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    );

  }

}

export default App;
