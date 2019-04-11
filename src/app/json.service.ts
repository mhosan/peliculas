import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/Rx';                             //daba error al compilar, hubo que instalar: npm install rxjs-compat
import { IPeliculas } from "./IPeliculas";
//import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  private url: string = '';
  private apiKey: string = 'caa03693';

  constructor(private http: HttpClient) { }

  searchMovies(titulo: string, tipo: string){
    this.url = `http://www.omdbapi.com/?s=${encodeURI(titulo)}&type=${tipo}&apikey=${this.apiKey}`;
    console.log(this.url);
    return this.http.get<IPeliculas>(this.url).pipe(map(results => results['Search']));
  }
  
  getPelicula(id: string){
    return this.http.get<IPeliculas>(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }

}

