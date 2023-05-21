import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {

  @Input() input_txtRespuesta: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
