import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreguntasFrecuentesComponent } from './Components/preguntas-frecuentes/preguntas-frecuentes.component';
import { InformacionPersonalComponent } from './Components/informacion-personal/informacion-personal.component';
import { EventosProximosComponent } from './Components/eventos-proximos/eventos-proximos.component';
import { AboutComponent } from './Components/about/about.component';
import { InteresComponent } from './Components/interes/interes.component';
import { AdquirirBoletoComponent } from './Components/adquirir-boleto/adquirir-boleto.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ContactoComponent } from './Components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    
    PreguntasFrecuentesComponent,
    InformacionPersonalComponent,
    EventosProximosComponent,
    AboutComponent,
    InteresComponent,
    AdquirirBoletoComponent,
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
