import { Component, OnInit } from '@angular/core';
//Before 8.0.0
import firebase from 'firebase/compat/app';
//import * as firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng-udemy-primera-app';
  private name = 'Alexnder';
  num: number  = 0;
  vDescripcion = "";

  funDatosUsuario(data: any[]){
    console.log(data);
    this.vDescripcion = "Email: " + (data[0]).email + " - Clave: " + (data[0]).clave;
  }
  funGetName(e: any):string{
      console.table(e.target.value);

      return this.name;
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDjVAgOXTHL6wwPP69tEYWM5vi7JwN3TNg",
      authDomain: "listado-personas-2aa3c.firebaseapp.com",
    });
    //console.table(firebase.initializeApp);
    console.log("firebase.initializeApp: ->",firebase.app().name);

  }
}


