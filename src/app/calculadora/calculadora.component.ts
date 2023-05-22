import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  txtNumeroA: number = 0;
  txtNumeroB: number = 0;
  txtResultadoSuma: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  funSumar(){
    this.txtResultadoSuma = Number(this.txtNumeroA)+Number(this.txtNumeroB);
  }

  ngOnInit(): void {
    console.log('id: ',this.route.snapshot.params['id']);
    console.log('name: ',this.route.snapshot.params['name']);
  }

}
