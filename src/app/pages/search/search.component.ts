import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private service:MovieApiServiceService){}

  ngOnInit():void{}
  searchFinding:any=[]
  searchForm=new FormGroup({
    'movieName':new FormControl()
  });

  submitForm(){
    console.log(this.searchForm.value);
    this.service.searchResults(this.searchForm.value).subscribe(res=>{
      console.log(res)
      this.searchFinding=res.results
    })
  }

}
