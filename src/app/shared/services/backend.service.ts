import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  // sign-up page - create a new user
  // TODO: добавить interface в formData
  createUser(formData): Promise<firebase.auth.UserCredential> {
    if (environment.database === 'firebase') {
      return this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password);
    }
    if (environment.database === 'SQL') {
      // need to call SQL API here if a SQL Database is used
    }
  }

  // login page - login with GOOGLE/EMAIL, if formData is passed, this means is user is using email/password login
  // TODO: loginType можно сделать как Enum
  login(loginType: string, formData?): Promise<firebase.auth.UserCredential> | Promise<void> {
    if (formData) {
      return this.afAuth.auth.signInWithEmailAndPassword(formData.email, formData.password);
    } else {
      let loginMethod;
      if (loginType === 'GOOGLE') { loginMethod = new firebase.auth.GoogleAuthProvider(); }

      return this.afAuth.auth.signInWithRedirect(loginMethod);
    }
  }

  logout(): Promise<void> {
    window.localStorage.removeItem('displayName');
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('picture');
    return this.afAuth.auth.signOut();
  }

  // method to retreive firebase auth after login redirect
  redirectLogin(): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.getRedirectResult();
  }
}
