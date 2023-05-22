import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Persona } from '../persona/persona.model';
import { error } from 'console';
import { LoginService } from './login.service';

//para errores
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

//Projecto: listado-personas
//FireBase
//https://listado-personas-2aa3c-default-rtdb.firebaseio.com/
export class DataService {

  constructor(
    private router : Router,
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  dbURL = 'https://listado-personas-2aa3c-default-rtdb.firebaseio.com/';

  funGetPersonas(){
    let token = this.loginService.funGetIDTokenServ();
    let data = this.http.get<Persona[]>(this.dbURL+'datos.json'+'?auth='+token).pipe(
      catchError((error: HttpErrorResponse) => {
      //console.log("ROUTER: error.status ",error.status);
      //console.error("ROUTER: ERROR ==> ",error);
      switch(error.status) {
      case HttpStatusCode.Conflict:
       return throwError(() => new Error ('Ups algo esta fallando en el server'));
      case HttpStatusCode.NotFound:
       return throwError('No esta registrado o la Pag. no existe. ( '+error.status+error.statusText+' )');
        //return throwError(() => new Error ('el registro (Producto) con el { ID = '+id+' } no esta registrado o la Pag. no existe. ( '+error.status+error.statusText+' )'));
        //return throwError(() => new Error (error.message));
      case HttpStatusCode.Unauthorized:
       this.router.navigate(['/login']);
       //return throwError(() => new Error ('Acceso denegado **'));
       return throwError(() => error.status+': Acceso denegado');
      default:
       return throwError(() => new Error ('Ups algo salio mal'));
       }
      })
    );
    console.log('1 - funGetPersonas(): ',data);
    return data;
  }

  funGuargarPersona(data: Persona[]){
    let token = this.loginService.funGetIDTokenServ();
    this.http.put(this.dbURL+'datos.json'+'?auth='+token, data).subscribe(
      resp =>{
        console.log("Se guardo el registro"+ resp);
      },
      error => {
        console.log("Error al Guardar: " + error.status);
        this.router.navigate(['/login']);
      }
    );
  }
}
