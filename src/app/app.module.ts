import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { SeccionBosqueComponent } from './seccion-bosque/seccion-bosque.component';
import { SeccionFoldComponent } from './seccion-fold/seccion-fold.component';
import { SeccionSphynxComponent } from './seccion-sphynx/seccion-sphynx.component';


@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    NotificacionComponent,
    SeccionBosqueComponent,
    SeccionFoldComponent,
    SeccionSphynxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
