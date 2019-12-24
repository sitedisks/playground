import React from 'react';
import { IonPage, IonToast, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/react';
import Header from '../components/Header';
import { CONFIG } from '../constants';

class SettingsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            bio: '',
            image: '',
            email: '',
            toastState: false
        };
    }

    updateUserName = (e) => {
        // console.log(this.state);
        this.setState({ username: e.detail.value });
    }

    updatePassword = (e) => {
        this.setState({ password: e.detail.value });
    }

    updateImage = (e) => {
        this.setState({ image: e.detail.value });
    }

    updateBio = (e) => {
        this.setState({ bio: e.detail.value });
    }

    componentDidMount() {
        let url = CONFIG.API_ENDPOINT + "user";
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.getItem("token")
            },
        }).then(res => res.json())
            .then(
                (result) => {

                    this.setState({
                        username: result.user.username,
                        bio: result.user.bio,
                        image: result.user.image,
                        email: result.user.email
                    });
                },
                (error) => {
                    console.error(error);
                }
            );
    }

    update = (e) => {
        let credentials;
        credentials = {
            "user": {
                "bio": this.state.bio,
                "image": this.state.image,
                "username": this.state.username,
            }
        }
        if (this.state.password != '') {
            credentials = {
                "user": {
                    "bio": this.state.bio,
                    "image": this.state.image,
                    "username": this.state.username,
                    "password": this.state.password

                }
            }
        }
        if (this.state.image == null || this.state.image == '') {
            delete credentials.user.image;
        }

        fetch(CONFIG.API_ENDPOINT + "user", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.getItem("token")
            },
            body: JSON.stringify(credentials)
        }).then(res=>res.json()).then(
            (result)=>{
                console.log(result);
                localStorage.setItem("token", result.user.token);
                this.setState({
                    toastState:true
                });
            },
            (error)=>{
                console.error(error);
            }
        );

    }

    render() {
        return (<IonPage>
            <Header title="Settings"></Header>
            <IonToast isOpen={
                this.state.toastState}
                onDidDismiss={() => ({ toastState: false })}
                message="Settings Updated"
                duration={400}></IonToast>
            <IonContent padding>
                <form action="">
                    <IonItem>
                        <IonLabel position="fixed">Username</IonLabel>
                        <IonInput onIonChange={this.updateUserName}
                            type="text" placeholder="username"
                            value={this.state.username}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="fixed">Image URL</IonLabel>
                        <IonInput onIonChange={this.updateImage}
                            type="text" placeholder="Profile Picture"
                            value={this.state.image}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="fixed">Bio</IonLabel>
                        <IonTextarea rows={8} onIonChange={this.updateBio}
                            type="text" placeholder="Bio"
                            value={this.state.bio}></IonTextarea>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="fixed">Email</IonLabel>
                        <IonInput disabled type="text" placeholder="email"
                            value={this.state.email}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="fixed">Password</IonLabel>
                        <IonInput onIonChange={this.updatePassword}
                            type="password" placeholder="password"
                            value={this.state.password}></IonInput>
                    </IonItem>

                    <IonButton color="success" expand="block" onclick={this.update}>Update Settings</IonButton>
                </form>
            </IonContent>
        </IonPage>);
    }
}

export default SettingsPage;