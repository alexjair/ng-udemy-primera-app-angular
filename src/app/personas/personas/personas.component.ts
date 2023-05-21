import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor() { }

  vEstado = false;

  funRegistarPersona(){
    console.log("Agregar persona");

  }

  ngOnInit(): void {
  }

}
