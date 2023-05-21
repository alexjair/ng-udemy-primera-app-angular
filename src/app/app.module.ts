import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { InlineaComponent } from './inlinea/inlinea.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PersonaCardComponent } from './persona-card/persona-card.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ContenedorComponent } from './calculadora-comp/contenedor/contenedor.component';
import { RespuestaComponent } from './calculadora-comp/respuesta/respuesta.component';
import { FrmSumaComponent } from './calculadora-comp/frm-suma/frm-suma.component';
import { FrmReferenciasComponent } from './frm-referencias/frm-referencias.component';
import { ViewChildComponent } from './view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    InlineaComponent,
    CalculadoraComponent,
    PersonaCardComponent,
    FormularioComponent,
    ContenedorComponent,
    RespuestaComponent,
    FrmSumaComponent,
    FrmReferenciasComponent,
    ViewChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
