import { Component, OnInit, Input } from '@angular/core';
import { Persona }  from '../persona/persona.model';

@Component({
  selector: 'app-persona-card',
  templateUrl: './persona-card.component.html',
  styleUrls: ['./persona-card.component.css']
})
export class PersonaCardComponent implements OnInit {
  constructor() { }

  @Input() row: Persona = {
    nombre: '',
    apellido: '',
  };

  ngOnInit(): void {
  }

}
