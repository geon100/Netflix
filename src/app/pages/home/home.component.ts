import { Component,OnInit} from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { MovieDetails } from "../../movies.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   banners: MovieDetails[]=[]
   trendingMovies:MovieDetails[]=[]
   adventureMovies:MovieDetails[]=[]
   animationMovies:MovieDetails[]=[]
   scienceFictions:MovieDetails[]=[]
   comedyMovies: MovieDetails[]=[]
   documentaryMovies:MovieDetails[]=[]
   thrillerMovies:MovieDetails[]=[]
   actionMovies:MovieDetails[]=[]
  

  constructor(private service:MovieApiServiceService){}

  ngOnInit():void{
    this.bannerData()
    this.trendingMoviesData()
    this.actionMoviesList()
    this.adventureMoviesList()
    this.animationMoviesList()
    this.scienceFictionList()
    this.comedyMoviesList()
    this.docMoviesList()
    this.thrillerMoviesList()
  }


  bannerData():void{
    this.service.bannerApiData().subscribe(result=>{
      // console.log(result,"Banner")
      if(result.results)
      this.banners=result.results
    })
  }
  trendingMoviesData():void{
    this.service.trendingMoviesData().subscribe(result=>{
      // console.log(result,"TRENDING")
      if(result.results)
      this.trendingMovies=result.results
    })
  }

  actionMoviesList():void{
    this.service.actionMoviesData().subscribe(res=>{
      if(res.results)
      this.actionMovies=res.results
    })
  }

  adventureMoviesList():void{
    this.service.adventureMoviesData().subscribe(res=>{
      if(res.results)
      this.adventureMovies=res.results
    })
  }

  animationMoviesList():void{
    this.service.animationMoviesData().subscribe(res=>{
      if(res.results)
      this.animationMovies=res.results
    })
  }
  scienceFictionList():void{
    this.service.scienceFictionMoviesData().subscribe(res=>{
      if(res.results)
      this.scienceFictions=res.results
    })
  }

  comedyMoviesList():void{
    this.service.comedyMoviesData().subscribe(res=>{
      if(res.results)
      this.comedyMovies=res.results
    })
  }

  docMoviesList():void{
    this.service.documentaryMoviesData().subscribe(res=>{
      if(res.results)
      this.documentaryMovies=res.results
    })

  }
  thrillerMoviesList():void{
    this.service.thrillerMoviesData().subscribe(res=>{
      if(res.results)
      this.thrillerMovies=res.results
    })
  }

}