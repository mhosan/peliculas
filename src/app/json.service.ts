import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';                             //daba error al compilar, hubo que instalar: npm install rxjs-compat
import { Subject } from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class JsonService {
  propTitulo: string = '';
  //private aviso = new Subject<string>();
  //aviso$ = this.aviso.asObservable();

  constructor(private http: Http) { }

  //anunciarAlgo(elTitulo:string){
  //  this.aviso.next(elTitulo);
  //}
  
  getPelicula(titulo: string){
    this.propTitulo = titulo;
    //this.aviso.next(this.propTitulo);
    return this.http.get('http://www.omdbapi.com/?t=' + titulo + '&apikey=caa03693').map((res: Response) => res.json());
  }

}

