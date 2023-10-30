import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CastEntity, MovieData, VideoData, vidData } from 'src/app/movies.interface';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  constructor(private service:MovieApiServiceService,private router: ActivatedRoute){}
MovieDetails!:MovieData;
movieVideo!:vidData;
cast!:CastEntity[]
  ngOnInit():void{
    let id=this.router.snapshot.paramMap.get('id') as string
    console.log(id)
    this.getMovie(id)
    this.getVideo(id)
    this.getCast(id)
  }

getMovie(id:string){
  this.service.getMovieDetails(id).subscribe(res=>{
    // console.log(res)
    this.MovieDetails=res
  })
}

getVideo(id:string){
  this.service.getMovieVideo(id).subscribe((res)=>{
    // console.log(res.results)
    if(res.results){
      res.results.forEach((element:VideoData) => {
        if(element.type==='Trailer' && element?.key)
        this.movieVideo=element
      });
    }
    
    
  })
}

getCast(id:string){
  this.service.getMovieCast(id).subscribe(res=>{
    if(res.cast)
    this.cast=res.cast
    console.log(res.cast,"cast")
  })
}

}
