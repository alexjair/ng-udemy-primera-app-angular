import { NgModule } from '@angular/core';
import { PersonaComponent } from './persona/persona.component';
import { Routes, RouterModule} from '@angular/router'
import { FormularioComponent } from './formulario/formulario.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContenedorComponent } from './calculadora-comp/contenedor/contenedor.component';
import { FrmReferenciasComponent } from './frm-referencias/frm-referencias.component';
import { InlineaComponent } from './inlinea/inlinea.component';
import { PersonaCardComponent } from './persona-card/persona-card.component';
import { PersonasComponent } from './personas/personas/personas.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login-guardian.service';

const routes: Routes = [
  {path: '', component: PersonaComponent, canActivate:[LoginGuardian]},
  {path: 'calculadora/:id/:name', component: CalculadoraComponent, canActivate:[LoginGuardian]},
  {path: 'calculadora-comp', component: ContenedorComponent, canActivate:[LoginGuardian]},
  {path: 'formulario', component: FormularioComponent, canActivate:[LoginGuardian]},
  {path: 'frm-referencias', component: FrmReferenciasComponent, canActivate:[LoginGuardian]},
  {path: 'inlinea', component: InlineaComponent, canActivate:[LoginGuardian]},
  {path: 'persona-card', component: PersonaCardComponent, canActivate:[LoginGuardian]},
  {path: 'personas', component: PersonasComponent, canActivate:[LoginGuardian]},
  {path: 'view-child', component: ViewChildComponent, canActivate:[LoginGuardian]},
  {path: 'persona', component: PersonaComponent, canActivate:[LoginGuardian]},
  {path: 'persona/:id', component: PersonaComponent, canActivate:[LoginGuardian]},

  //ULTIMO ELEMNTO
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorComponent}, //error 404
]

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
