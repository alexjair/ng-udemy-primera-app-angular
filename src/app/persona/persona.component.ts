import { Component, OnInit } from '@angular/core';
import { Persona }  from './persona.model';
import { LogginserviceService }  from '../services/logginservice.service';
import { PersonasService }  from '../services/personas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  constructor(
    private logginserviceService:LogginserviceService,
    private loginService:LoginService,
    private personasService:PersonasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.personasService.vSaludar.subscribe(
      (data: Persona) => {
        console.table(data);
        alert(data.nombre+' | '+data.apellido);
      }
    )
  }

  arrayPersonas: Persona [] = [];
  txtNombre: string="";
  txtApellido: string="";

  funSalirApp(){
    this.loginService.funLogout();
  }

  funObeneterPersonasDBFireBase(){
    return this.personasService.funObetenerPersonasDB().subscribe(
      (data: Persona[]) =>{
        this.arrayPersonas = data;
      }
    )
  }

  funRegistarPersona(){
    let vPersonaNew: Persona[] = [{
      nombre: this.txtNombre,
      apellido: this.txtApellido
    }];
    //this.logginserviceService.funEnviaMensajeconsola(vPersonaNew);
    //this.arrayPersonas = this.arrayPersonas.concat(vPersonaNew);
    this.arrayPersonas = this.personasService.funAgregarPersonas(vPersonaNew);
  }

  ngOnInit(): void {
    //  console.table(this.personasService.arrayPersonas);
    this.arrayPersonas = this.personasService.arrayPersonas;
    console.log('id',this.route.snapshot.params['id']);
    console.log('queryParameter:',this.route.snapshot.queryParams);
  }

}
