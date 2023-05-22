import { Injectable, EventEmitter } from '@angular/core';
import { Persona } from '../persona/persona.model';
import { LogginserviceService } from '../services/logginservice.service'
import { DataService } from '../services/data.service'

@Injectable({
  providedIn: 'root'
})

export class PersonasService {

  constructor(
    private logginserviceService: LogginserviceService,
    private dataService: DataService
  ) { }

  arrayPersonas: Persona [] = [
    {
      nombre: "July",
      apellido: "Sanguinetti Bardales"
    },{
      nombre: "Alexander Jair",
      apellido: "Rojas Paria"
    }
  ];

  vSaludar = new EventEmitter<Persona>();

  funObetenerPersonasDB(){
    let data = this.dataService.funGetPersonas();
    console.log('2 - funObetenerPersonasDB(): ',data);
    return data;
  }

  funEliminar(row: Persona){
    const indice: number = this.arrayPersonas.indexOf(row);
    this.arrayPersonas.splice(indice,1);
  }

  funAgregarPersonas(vPersonaNew:Persona[]){
    this.logginserviceService.funEnviaMensajeconsola(vPersonaNew);
    this.arrayPersonas = this.arrayPersonas.concat(vPersonaNew);
    this.dataService.funGuargarPersona(this.arrayPersonas);
    return  this.arrayPersonas;
  }
}
