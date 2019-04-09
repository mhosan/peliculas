import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { JsonService } from './json.service';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { MostrarComponent } from './componentes/mostrar/mostrar.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    MostrarComponent,
    EncabezadoComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    JsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
