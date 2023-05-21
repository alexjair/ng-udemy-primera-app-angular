import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit {

  vResultado: number = 0;

  constructor() { }

  funProcesarSuma(ressultado: number){
    this.vResultado = ressultado;
    console.log("Contenedor: outPut => Suma: ",this.vResultado);

  }

  ngOnInit(): void {
  }

}
