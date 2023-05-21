import { Component, OnInit } from '@angular/core';
import { Persona }  from './persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
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
  txtNombre: string="";
  txtApellido: string="";

  funRegistarPersona(){
    let vPersonaNew: Persona[] = [{
      nombre: this.txtNombre,
      apellido: this.txtApellido
    }];

    this.arrayPersonas = this.arrayPersonas.concat(vPersonaNew);
  }

  ngOnInit(): void {
  }

}
