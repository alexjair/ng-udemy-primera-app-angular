import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  txtNumeroA: number = 0;
  txtNumeroB: number = 0;
  txtResultadoSuma: number = 0;

  constructor() { }

  funSumar(){
    this.txtResultadoSuma = Number(this.txtNumeroA)+Number(this.txtNumeroB);
  }

  ngOnInit(): void {
  }

}
