
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { CastData, MovieData, MovieVid } from '../movies.interface';


@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";


  //bannerapidata

  bannerApiData(): Observable<MovieData> {
    return this.http.get<MovieData>(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

  trendingMoviesData():Observable<MovieData>{
    return this.http.get<MovieData>(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }

  actionMoviesData():Observable<MovieData>{
    return this.http.get<MovieData>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  adventureMoviesData(): Observable<MovieData> {
    return this.http.get<MovieData>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  animationMoviesData(): Observable<MovieData> {
    return this.http.get<MovieData>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

  comedyMoviesData(): Observable<MovieData> {
    return this.http.get<MovieData>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  documentaryMoviesData(): Observable<MovieData> {
    return this.http.get<MovieData>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }

  

  scienceFictionMoviesData(): Observable<MovieData> {
    return this.http.get<MovieData>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  
  thrillerMoviesData(): Observable<MovieData> {
    return this.http.get<MovieData>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }

  searchResults(data:{movieName?:string}):Observable<MovieData>{
    return this.http.get<MovieData>(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }

  getMovieDetails(data:string):Observable<MovieData>{
    return this.http.get<MovieData>(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`) 
  }

  getMovieVideo(data: string): Observable<MovieVid> {
    return this.http.get<MovieVid>(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  getMovieCast(data: string): Observable<CastData> {
    return this.http.get<CastData>(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }


}
