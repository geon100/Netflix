import { Component,OnInit} from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { MovieDetails } from "../../movies.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  trendingMovies:MovieDetails[]=[]
  adventureMovies:MovieDetails[]=[]
   animationMovies:MovieDetails[]=[]
   scienceFictions:MovieDetails[]=[]
   comedyMovies: MovieDetails[]=[]
   documentaryMovies:MovieDetails[]=[]
   thrillerMovies:MovieDetails[]=[]
   actionMovies:MovieDetails[]=[]

   list:MovieDetails[][]=[]

    category:string[]=['Trending','Action','Adventure','Animation','Science Fiction','Comedy','Documentary','Thriller']
   

   constructor(private service:MovieApiServiceService){}

  ngOnInit():void{
   
    this.trendingMoviesData()
    this.actionMoviesList()
    this.adventureMoviesList()
    this.animationMoviesList()
    this.scienceFictionList()
    this.comedyMoviesList()
    this.docMoviesList()
    this.thrillerMoviesList()
  
  }


  
  trendingMoviesData():void{
    this.service.trendingMoviesData().subscribe(result=>{
      // console.log(result,"TRENDING")
      if(result.results)
      this.trendingMovies=result.results
      this.list.push(this.trendingMovies)
    })
  }

  actionMoviesList():void{
    this.service.actionMoviesData().subscribe(res=>{
      if(res.results)
      this.actionMovies=res.results
      this.list.push(this.actionMovies)
      // this.type='Action'
    })
  }

  adventureMoviesList():void{
    this.service.adventureMoviesData().subscribe(res=>{
      if(res.results)
      this.adventureMovies=res.results
      this.list.push(this.adventureMovies)
      // this.type='Adventure'
    })
  }

  animationMoviesList():void{
    this.service.animationMoviesData().subscribe(res=>{
      if(res.results)
      this.animationMovies=res.results
      this.list.push(this.animationMovies)
      // this.type='Animation'
    })
  }
  scienceFictionList():void{
    this.service.scienceFictionMoviesData().subscribe(res=>{
      if(res.results)
      this.scienceFictions=res.results
      this.list.push(this.scienceFictions)
      // this.type='Science Fiction'
    })
  }

  comedyMoviesList():void{
    this.service.comedyMoviesData().subscribe(res=>{
      if(res.results)
      this.comedyMovies=res.results
      this.list.push(this.comedyMovies)
      // this.type='Comedy'
    })
  }

  docMoviesList():void{
    this.service.documentaryMoviesData().subscribe(res=>{
      if(res.results)
      this.documentaryMovies=res.results
      this.list.push(this.documentaryMovies)
    })

  }
  thrillerMoviesList():void{
    this.service.thrillerMoviesData().subscribe(res=>{
      if(res.results)
      this.thrillerMovies=res.results
      this.list.push(this.thrillerMovies)
      // this.type='Thriller'
    })
  }

}