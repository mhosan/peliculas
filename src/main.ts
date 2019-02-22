//
//Este es el script javascript que se ejecuta para poner en marcha la aplicacion
//Se mantiene que el html que se ejecuta para poner en marcha la aplicación es el index.html
//

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)     //<---- Aqui se indica por donde va a comenzar la aplicación, o sea "AppModule"
  .catch(err => console.log(err));                      //bootstrap provocará que Angular lea el codigo del modulo, sepa que componentes
                                                        //existen para ponerlos en marcha.
