import React from 'react';
import { IonPage, IonToolbar, IonContent, IonButton, IonInput, IonToast, IonItem, IonFooter } from '@ionic/react';

import Header from '../components/Header';
import { CONFIG } from '../constants';
import { throwStatement } from '@babel/types';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            toastState: false,
            toastMessage: 'Message',
            action: 'Login',
            email: ''
        };

        this.event = new CustomEvent('loggedIn', { detail: false });

        this.updateEmail = this.updateEmail.bind(this);
        this.updateUserName = this.updateUserName.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.login = this.login.bind(this);
        this.toggleAction = this.toggleAction.bind(this);
    }

    updateEmail(e) {
        this.setState({ email: e.detail.value });
    }

    updateUserName(e) {
        this.setState({ username: e.detail.value });
    }

    updatePassword(e) {
        this.setState({ password: e.detail.value });
    }

    login() {
        var url = null;
        var credentials = null;
        if (this.state.action == 'Login') {
            url = CONFIG.API_ENDPOINT + '/users/login';
            credentials = {
                "user": {
                    "email": this.state.email,
                    "password": this.state.password
                }
            }
        }
        else {
            url = CONFIG.API_ENDPOINT + '/users';
            credentials = {
                "user": {
                    "email": this.state.email,
                    "password": this.state.password,
                    "username": this.state.username
                }
            }
        }

        fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials)
        }).then(
            function (res) {
                if (res.status == 200) {
                    return res.json();
                } else {
                    if (this.state.action == 'SignUp') {
                        throw new Error("Error creating user");
                    }
                    else {
                        throw new Error("Error Logging in");
                    }
                }
            }
        ).then(
            (result) => {
                localStorage.setItem("token", result.user.token);
                localStorage.setItem("username", result.user.username);
                localStorage.setItem("isLogin", "true");
                localStorage.setItem("email", result.user.email);

                this.event = new CustomEvent('loggedIn', { detail: true });
                window.dispatchEvent(this.event);

                this.props.history.replace('/');
            },
            (error) => {
                console.error(error);
                this.setState({
                    toastMessage: error.toString(),
                    toastState: true
                });
            }
        );
    }

    componentDidMount() {
        alert("enter login page");
        this.clearCredentials();
        this.props.history.listen((location, action) => {
            // history.listen??
            if (location.pathname == "/login") {
                this.clearCredentials();
            }
        });
        console.log(this.props);
    }

    clearCredentials() {
        this.event = new CustomEvent('loggedIn', { detail: false }); //? CustomeEvent
        window.dispatchEvent(this.event);

        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("isLogin");
        localStorage.removeItem("email");

    }

    toggleAction() {
        this.state.action === 'Login' ? this.setState({ action: 'SignUp' }) : this.setState({ action: 'Login' });
    }

    render() {
        return (
            <IonPage>
                <Header title="Login"></Header>
                <IonContent padding>
                    <IonToast
                        isOpen={this.state.toastState}
                        onDidDismiss={() => this.setState({ toastState: false })}
                        message={this.state.toastMessage}
                        duration={400}
                    ></IonToast>

                    <form action="">
                        <IonItem>
                            <IonInput onIonChange={this.updateEmail} type="email" placeholder="Email"></IonInput>
                        </IonItem>
                        {
                            this.state.action === 'SignUp' ?
                                <IonItem>
                                    <IonInput onIonChange={this.updateUserName} type="text" placeholder="Username"></IonInput>
                                </IonItem> : <></>
                        }
                        <IonItem>
                            <IonInput onIonChange={this.updatePassword} type="password" placeholder="Password"></IonInput>
                        </IonItem>
                    </form>

                    <IonButton onClick={this.login}>{this.state.action}</IonButton>
                </IonContent>
                <IonFooter>
                    <IonToolbar text-center>
                        Click here to <a onClick={this.toggleAction}>{this.state.action === 'Login' ? 'SignUp' : 'Login'}</a>
                    </IonToolbar>
                </IonFooter>
            </IonPage>
        )
    }
}

export default LoginPage;