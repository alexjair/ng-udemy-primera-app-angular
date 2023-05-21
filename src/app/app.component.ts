import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-udemy-primera-app';
  private name = 'Alexnder';
  num: number  = 0;
  vDescripcion = "";

  funDatosUsuario(data: any[]){
    console.log(data);
    this.vDescripcion = "Email: " + (data[0]).email + " - Clave: " + (data[0]).clave;
  }
  funGetName(e: any):string{
      console.table(e.target.value);

      return this.name;
  }
}


