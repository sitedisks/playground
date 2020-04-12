import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { environment } from 'src/environments/environment';
import { AbstractWebDriver } from 'protractor/built/browser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router) {

    console.log('auth service constructor!');
    this.afAuth.authState.subscribe(user => {
      console.log('authState updates');
      console.log(user);
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });

  }

  async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password);
    // this.router.navigate(['admin/list']);
  }

  async register(email: string, password: string) {
    var result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    this.sendEmailVerification();
  }

  async sendEmailVerification() {
    await (await this.afAuth.currentUser).sendEmailVerification();
    this.router.navigate(['admin/verfiy']);
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);

  }

  async logout() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    // this.router.navigate(['admin/login']);
  }

  async loginWithGoogle() {
    await this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    // this.router.navigate(['admin/list']);
  }

  async loginWithFacebook() {
    await this.afAuth.signInWithPopup(new auth.FacebookAuthProvider());
  }

}
