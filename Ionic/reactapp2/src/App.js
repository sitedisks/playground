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
import List from './pages/List/List';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ArticlePage from './pages/ArticlePage';
import TestPage from './pages/TestPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/Settings';

import { home, list, lock, person } from 'ionicons/icons';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: localStorage.getItem("isLogin") ? localStorage.getItem("isLogin") : "false",
      username: localStorage.getItem("username") ? localStorage.getItem("username") : "anonymous"
    };
  }

  render() {
    console.log("isLoggedIn: " + this.state.isLoggedIn);

    let profileLink = "/profile/" + this.state.username;

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
                      <IonLabel>Home Page</IonLabel>
                    </IonItem>
                    {this.state.isLoggedIn === "true" ?
                      <IonItem routerLink={profileLink}>
                        <IonIcon icon={person}></IonIcon>
                        <IonLabel>Profile</IonLabel>
                      </IonItem> : <></>}

                    {this.state.isLoggedIn != "true" ?
                      <IonItem routerLink="/login">
                        <IonIcon icon={lock}></IonIcon>
                        <IonLabel>Login</IonLabel>
                      </IonItem> : <></>}

                    {/* <IonItem routerLink="/home">
                      <IonIcon icon={home}></IonIcon>
                      <IonLabel>Home</IonLabel>
                    </IonItem>
                    <IonItem routerLink="/list">
                      <IonIcon icon={list}></IonIcon>
                      <IonLabel>List</IonLabel>
                    </IonItem> */}
                    <IonItem routerLink="/test">
                      <IonLabel>Test</IonLabel>
                    </IonItem>
                  </IonMenuToggle>
                </IonList>
              </IonContent>
            </IonMenu>

            <IonRouterOutlet id="main">
              <Route path="/home" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/article/:slug" component={ArticlePage} />
              <Route path="/profile/:authorname" component={ProfilePage} />
              {/* <Route path="/home" component={Home} />
              <Route path="/list" component={List} /> */}
              <Route path="/settings" component={SettingsPage} />
              <Route path="/test" component={TestPage} />
              <Route path="/" component={HomePage} exact />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    );
  };

}

export default App;
