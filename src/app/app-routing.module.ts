import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { AboutComponent } from './Components/about/about.component';
import { EventosProximosComponent } from './Components/eventos-proximos/eventos-proximos.component';
import { AdquirirBoletoComponent } from './Components/adquirir-boleto/adquirir-boleto.component';
import { InteresComponent } from './Components/interes/interes.component';
import { PreguntasFrecuentesComponent } from './Components/preguntas-frecuentes/preguntas-frecuentes.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
const routes: Routes = [

  {path:'', component:InicioComponent},
  {path:'about', component:AboutComponent},
  {path:'eventos-proximos', component:EventosProximosComponent},
  {path:'adquirir-boleto', component:AdquirirBoletoComponent},
  {path:'app-interes', component:InteresComponent},
  {path: 'app-preguntas-frecuentes', component:PreguntasFrecuentesComponent},
  {path: 'app-contacto', component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
