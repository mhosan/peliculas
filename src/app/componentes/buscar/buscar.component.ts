import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IPeliculas } from 'src/app/ipeliculas';
import { JsonService } from 'src/app/json.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  contenido: string = '';
  titulo: string = '';
  public peliculas: IPeliculas = {} as IPeliculas;
  @Output() eventoYaBusque = new EventEmitter<IPeliculas>();

  constructor(private json: JsonService) { }

  ngOnInit() {
  }

  onSubmitBuscar(event: any){
    this.contenido = event.target.value;
    this.json.getPelicula(this.contenido).subscribe( respuesta => {
      console.log("Buscar-Respuesta:", respuesta);
      this.peliculas = {
        Title : respuesta.Title,
        Released : respuesta.Released,
        Runtime: respuesta.Runtime,
        Actors: respuesta.Actors,
        Awards: respuesta.Awards,
        Director: respuesta.Director,
        Genre: respuesta.Genre,
        Language: respuesta.Language,
        Poster: respuesta.Poster
      };
      this.eventoYaBusque.emit(this.peliculas);
    });
  }

}
