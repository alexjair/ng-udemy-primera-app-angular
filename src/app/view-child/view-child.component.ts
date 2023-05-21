import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  constructor() { }

  @ViewChild('txtResultadoSuma') txtResultadoSuma: ElementRef | any;
  @ViewChild('txtNumeroA') txtNumeroA:ElementRef | any;
  @ViewChild('txtNumeroB') txtNumeroB:ElementRef | any;

  funSumarChild(){
    this.txtResultadoSuma.nativeElement.value = Number(this.txtNumeroA.nativeElement.value) +
    Number(this.txtNumeroB.nativeElement.value);
  }

  ngOnInit(): void {
  }

}
