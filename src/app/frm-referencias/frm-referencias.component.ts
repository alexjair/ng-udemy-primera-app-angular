import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frm-referencias',
  templateUrl: './frm-referencias.component.html',
  styleUrls: ['./frm-referencias.component.css']
})
export class FrmReferenciasComponent implements OnInit {

  constructor() { }

  txtResultadoSuma : number = 0;

  funSumarReferencias(txtNumeroA:HTMLInputElement, txtNumeroB:HTMLInputElement){
    console.log("funSumarReferencias()",txtNumeroA.value);
    console.log("funSumarReferencias()",txtNumeroB.value);
    let suma: number = Number(txtNumeroA.value) +Number(txtNumeroB.value);
    console.log(suma);
    this.txtResultadoSuma = suma;
  }

  ngOnInit(): void {
  }

}
