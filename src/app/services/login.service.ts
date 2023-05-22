import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';
//import * as firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private router : Router
  ) { }

  token: string | null = "";

  isAutenticado(){
      return this.token != null && this.token != ""
  }

  funLogout(){
    firebase.auth().signOut().then(
      () => {
        this.token = null;
        this.router.navigate(['/login']);
      }
    ).catch( error => {
      console.log('Error al salir', error.status);
    })
  }

  funLoginServ(email:string, password: string){
    console.log("funLoginServ()", {email} );
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        resp => {
          console.log('signInWithEmailAndPassword =>',resp);

          firebase.auth().currentUser?.getIdToken().then(
            token => {
              console.log("getIdToken => ",token);
              this.token = token;
              this.router.navigate(['/']);
            }
          )
        }
      )
  }

  funGetIDTokenServ(){
    return this.token;
  }

}
