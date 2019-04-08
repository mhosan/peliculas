import { Component } from 'node_modules/@angular/core';
import { JsonService} from './json.service';
import { IPoblacion } from './poblacion.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testeo';
  public pobMundial: IPoblacion = {} as IPoblacion;
  public pobArgentina: IPoblacion = {} as IPoblacion;
  public pobBrasil: IPoblacion = {} as IPoblacion;
  public pobChile: IPoblacion = {} as IPoblacion;
  public pobBolivia: IPoblacion = {} as IPoblacion;
  public pobParaguay: IPoblacion = {} as IPoblacion;
  public pobUruguay: IPoblacion = {} as IPoblacion;
  public pobPeru: IPoblacion = {} as IPoblacion;

  constructor(private json: JsonService){
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.hacerAlgo();
  }
  // hacerAlgo(){
    // let i = 100;
    // this.json.getData("").subscribe(respuesta => {
    // this.json.getData("https://api.github.com/users/mhosan/repos").subscribe(respuesta => {
    // console.log("Respuesta:");
    // console.log(respuesta);
      // console.log(respuesta.latt + ", " + respuesta.longt);
      // tslint:disable-next-line:max-line-length
      // console.log(respuesta[i].title + ", " + respuesta[i].year + ", " + respuesta[i].director + ", " + respuesta[i].cast + ", " + respuesta[i].genre);
    // });
  // }
  hacerAlgo () {
    this.json.getData("http://api.population.io/1.0/population/World/today-and-tomorrow/?format=json").subscribe(respuesta => {
      console.log("Respuesta:", respuesta);
      this.pobMundial = {
        fechaHoy : respuesta.total_population[0].date,
        cantidadHoy : respuesta.total_population[0].population,
        fechaTomorrow: respuesta.total_population[1].date,
        cantidadTomorrow: respuesta.total_population[1].population
      };
    });
  
    this.json.getData("http://api.population.io/1.0/population/Argentina/today-and-tomorrow/?format=json").subscribe(respuesta => {
      console.log("Respuesta:", respuesta);
      this.pobArgentina = {
        fechaHoy : respuesta.total_population[0].date,
        cantidadHoy : respuesta.total_population[0].population,
        fechaTomorrow: respuesta.total_population[1].date,
        cantidadTomorrow: respuesta.total_population[1].population
      };
    });
    this.json.getData("http://api.population.io/1.0/population/Brazil/today-and-tomorrow/?format=json").subscribe(respuesta => {
      console.log("Respuesta:", respuesta);
      this.pobBrasil = {
        fechaHoy : respuesta.total_population[0].date,
        cantidadHoy : respuesta.total_population[0].population,
        fechaTomorrow: respuesta.total_population[1].date,
        cantidadTomorrow: respuesta.total_population[1].population
      };
    });
    this.json.getData("http://api.population.io/1.0/population/Chile/today-and-tomorrow/?format=json").subscribe(respuesta => {
      console.log("Respuesta:", respuesta);
      this.pobChile = {
        fechaHoy : respuesta.total_population[0].date,
        cantidadHoy : respuesta.total_population[0].population,
        fechaTomorrow: respuesta.total_population[1].date,
        cantidadTomorrow: respuesta.total_population[1].population
      };
    });
    this.json.getData("http://api.population.io/1.0/population/Bolivia/today-and-tomorrow/?format=json").subscribe(respuesta => {
      console.log("Respuesta:", respuesta);
      this.pobBolivia  = {
        fechaHoy : respuesta.total_population[0].date,
        cantidadHoy : respuesta.total_population[0].population,
        fechaTomorrow: respuesta.total_population[1].date,
        cantidadTomorrow: respuesta.total_population[1].population
      };
    });
    this.json.getData("http://api.population.io/1.0/population/Paraguay/today-and-tomorrow/?format=json").subscribe(respuesta => {
      console.log("Respuesta:", respuesta);
      this.pobParaguay = {
        fechaHoy : respuesta.total_population[0].date,
        cantidadHoy : respuesta.total_population[0].population,
        fechaTomorrow: respuesta.total_population[1].date,
        cantidadTomorrow: respuesta.total_population[1].population
      };
    });
    this.json.getData("http://api.population.io/1.0/population/Uruguay/today-and-tomorrow/?format=json").subscribe(respuesta => {
      console.log("Respuesta:", respuesta);
      this.pobUruguay = {
        fechaHoy : respuesta.total_population[0].date,
        cantidadHoy : respuesta.total_population[0].population,
        fechaTomorrow: respuesta.total_population[1].date,
        cantidadTomorrow: respuesta.total_population[1].population
      };
    });
    this.json.getData("http://api.population.io/1.0/population/Peru/today-and-tomorrow/?format=json").subscribe(respuesta => {
      console.log("Respuesta:", respuesta);
      this.pobPeru = {
        fechaHoy : respuesta.total_population[0].date,
        cantidadHoy : respuesta.total_population[0].population,
        fechaTomorrow: respuesta.total_population[1].date,
        cantidadTomorrow: respuesta.total_population[1].population
      };
    });
  }
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
//http://www.omdbapi.com/?t=Dumbo&apikey=caa03693

//musica:
//http://www.songsterr.com/a/ra/songs.json?pattern=Beatles
