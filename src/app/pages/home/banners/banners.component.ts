import { Component } from '@angular/core';
import { MovieDetails } from 'src/app/movies.interface';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent {
  banners: MovieDetails[]=[]

  constructor(private service:MovieApiServiceService){}

  ngOnInit():void{
    this.bannerData()
  }

  bannerData():void{
    this.service.bannerApiData().subscribe(result=>{
      // console.log(result,"Banner")
      if(result.results)
      this.banners=result.results
    })
  }
}
