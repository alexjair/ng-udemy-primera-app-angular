import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../persona/persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  constructor() { }

  //@Output() outArrayUsuario = new EventEmitter<Persona>();
  @Output() outArrayUsuario = new EventEmitter<any>();

  txtEmail = '';
  txtClave = '';
  txtSexo = true;

  funEnviarDatos(){
    let vUsuario: any [] = [{
      email: this.txtEmail,
      clave: this.txtClave,
      sexo: this.txtSexo
    }];
    console.table({vUsuario});

    this.outArrayUsuario.emit(vUsuario);
  }

  ngOnInit(): void {
  }

}
