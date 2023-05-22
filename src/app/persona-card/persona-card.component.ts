import { Component, OnInit, Input } from '@angular/core';
import { Persona }  from '../persona/persona.model';
import { PersonasService } from '../services/personas.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-persona-card',
  templateUrl: './persona-card.component.html',
  styleUrls: ['./persona-card.component.css']
})

export class PersonaCardComponent implements OnInit {
  constructor(
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  @Input() row: Persona = {
    nombre: '',
    apellido: '',
  };

  funEliminarLista(){
    console.log(this.row);
    this.personasService.funEliminar(this.row);
  }

  funEditarLista() {
    console.log(this.row);
    this.row['apellido'] = 'Editado apellido';
    this.row['nombre'] = 'Editado nombre';
    this.personasService.vSaludar.emit(this.row);
  }

  ngOnInit(): void {

  }

}
