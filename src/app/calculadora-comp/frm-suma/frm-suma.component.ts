import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-frm-suma',
  templateUrl: './frm-suma.component.html',
  styleUrls: ['./frm-suma.component.css']
})
export class FrmSumaComponent implements OnInit {

  @Output() outSuma = new EventEmitter<number>();

  txtValorA: number = 0;
  txtValorB: number = 0;

  funSumar() {
    let vSuma = this.txtValorA+this.txtValorB;
    this.outSuma.emit(vSuma);
    console.log("Frm-Suma: Output => Emitir Suma",vSuma);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
