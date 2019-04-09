import { Component, OnInit } from '@angular/core';
import { IPeliculas } from 'src/app/ipeliculas';
import { JsonService } from 'src/app/json.service';
import { jsonpFactory } from '@angular/http/src/http_module';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {
  public laPelicula: IPeliculas = {} as IPeliculas;

  constructor(private json: JsonService) {
  }

  ngOnInit() {
    this.laPelicula = {
      Title: '',
      Released: '',
      Runtime: '',
      Actors: '',
      Awards: '',
      Director: '',
      Genre: '',
      Language: '',
      Poster: ''
    };
  }
  atajarRespuesta(peliculas: IPeliculas) {
    this.laPelicula = {
      Title: peliculas.Title,
      Released: peliculas.Released,
      Runtime: peliculas.Runtime,
      Actors: peliculas.Actors,
      Awards: peliculas.Awards,
      Director: peliculas.Director,
      Genre: peliculas.Genre,
      Language: peliculas.Language,
      Poster: peliculas.Poster
    }
  }
  // esperarRespuesta(){
  //   this.json.aviso$.subscribe( tituloBuscar => {
  //     //console.log(tituloBuscar);
  //     this.json.getPelicula(tituloBuscar).subscribe( respuesta => {
  //       console.log("Mostrar-Respuesta:", respuesta);
  //       this.peliculas = {
  //          Title : respuesta.Title,
  //          Released : respuesta.Released,
  //          Runtime: respuesta.Runtime,
  //          Actors: respuesta.Actors
  //       }
  //     });
  //   });
  // }
}

//https://api.github.com/users/mhosan/repos
//https://tgeo.arba.gov.ar/mesi/buscador/getPartidos.aspx
//http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo
//https://api.github.com/users/mralexgray/repos

//Geocodificacion desde la api de la pagina https://geocode.xyz/api
//Examples: 2984 LEGUIZAMON, MARTINIANO Villa Lugano AR 
//https://geocode.xyz/51.50354,-0.12768?geoit=json
//https://geocode.xyz/Hauptstr.,+57632+Berzhausen?json=1

//poblacion:
//http://api.population.io/1.0/population/World/today-and-tomorrow/?format=json
//http://api.population.io/1.0/population/Argentina/today-and-tomorrow/?format=json

//reddit:Reddit es un sitio web de marcadores sociales y agregador de noticias donde los usuarios pueden dejar enlaces a contenidos web. 
//Otros usuarios pueden votar a favor o en contra de los enlaces, haciendo que aparezcan más o menos destacados
//https://www.reddit.com/r/all.json
//https://www.reddit.com/r/AskReddit.json
//https://www.reddit.com/r/pics.json
//https://www.reddit.com/r/worldnews.json

//peliculas:
//https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json
//otra api de peliculas, la pagina es www.omdbapi.com
//http://www.omdbapi.com/?t=Dumbo&apikey=caa03693 ojo que caa03693 es el api key. Esta api devuelve un json:
// {  
//   "Title":"Dumbo",
//   "Year":"1941",
//   "Rated":"G",
//   "Released":"31 Oct 1941",
//   "Runtime":"64 min",
//   "Genre":"Animation, Drama, Family, Musical",
//   "Director":"Samuel Armstrong, Norman Ferguson, Wilfred Jackson, Jack Kinney, Bill Roberts, Ben Sharpsteen, John Elliotte",
//   "Writer":"Joe Grant (screen story), Dick Huemer (screen story), Otto Englander (story direction), Bill Peet (story development), Aurelius Battaglia (story development), Joe Rinaldi (story development), Vernon Stallings (story development), Webb Smith (story development)",
//   "Actors":"James Baskett, Herman Bing, Mel Blanc, Billy Bletcher",
//   "Plot":"Ridiculed because of his enormous ears, a young circus elephant is assisted by a mouse to achieve his full potential.",
//   "Language":"English",
//   "Country":"USA",
//   "Awards":"Won 1 Oscar. Another 3 wins & 1 nomination.",
//   "Poster":"https://m.media-amazon.com/images/M/MV5BNWVmNWQ2OTQtNzJlNC00ZmQwLTg4ZTktZTNmM2IxZTlkOGM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
//   "Ratings":[  ],
//   "Metascore":"96",
//   "imdbRating":"7.3",
//   "imdbVotes":"106,159",
//   "imdbID":"tt0033563",
//   "Type":"movie",
//   "DVD":"23 Oct 2001",
//   "BoxOffice":"N/A",
//   "Production":"Walt Disney Productions",
//   "Website":"N/A",
//   "Response":"True"
// }

//musica:
//http://www.songsterr.com/a/ra/songs.json?pattern=Beatles
