import { Injectable } from '@angular/core';
import { Persona } from '../persona/persona.model';

@Injectable({
  providedIn: 'root'
})
export class LogginserviceService {

  constructor() { }

  funEnviaMensajeconsola(vPersonaNew:Persona[]){
    console.table(vPersonaNew);
    console.log(vPersonaNew[0].nombre);
    console.log(vPersonaNew[0].apellido);

  }
}
