import { Injectable } from '@angular/core';
import { Persona } from '../persona/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor() { }

  arrayPersonas: Persona [] = [
    {
      nombre: "July",
      apellido: "Sanguinetti"
    },{
      nombre: "Jair",
      apellido: "Rojas"
    }
  ];

  funAgregarPersonas(vPersonaNew:Persona[]){
    this.arrayPersonas = this.arrayPersonas.concat(vPersonaNew);
    return  this.arrayPersonas;
  }
}
