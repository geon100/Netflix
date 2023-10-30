import { Component, Input } from '@angular/core';
import { MovieDetails } from 'src/app/movies.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  @Input() public movies!:any[];
  @Input() public title!:string;

  ngOnInit(){
    console.log(this.movies)
  }

}
