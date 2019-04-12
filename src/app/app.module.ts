import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JsonService } from './json.service';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { MostrarComponent } from './componentes/mostrar/mostrar.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

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
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FlashMessagesModule
  ],
  providers: [
    JsonService,
    FlashMessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
