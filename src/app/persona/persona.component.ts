import { Component, OnInit } from '@angular/core';
import { Persona }  from './persona.model';
import { LogginserviceService }  from '../services/logginservice.service';
import { PersonasService }  from '../services/personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  constructor(
    private logginserviceService:LogginserviceService,
    private personasService:PersonasService
  ) { }

  arrayPersonas: Persona [] = [];
  txtNombre: string="";
  txtApellido: string="";

  funRegistarPersona(){
    let vPersonaNew: Persona[] = [{
      nombre: this.txtNombre,
      apellido: this.txtApellido
    }];

    this.logginserviceService.funEnviaMensajeconsola(vPersonaNew);

    //this.arrayPersonas = this.arrayPersonas.concat(vPersonaNew);
    this.arrayPersonas = this.personasService.funAgregarPersonas(vPersonaNew);
  }

  ngOnInit(): void {
    //  console.table(this.personasService.arrayPersonas);
    this.arrayPersonas = this.personasService.arrayPersonas;
  }

}
