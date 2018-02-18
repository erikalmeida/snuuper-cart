import { Injectable } from '@angular/core';
import {Product} from '../models/product'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ProductService {

  private electronicsUrl = 'api/electronics';
  private videogamesUrl = 'api/videogames';
  private moviessUrl = 'api/movies';  // URL to web api
  constructor(private http: HttpClient) { }

  getElectronics(): Observable<Product[]> {
    return this.http.get<Product[]>(this.electronicsUrl)
    .pipe(
      catchError(this.handleError('getElectronics', []))
    );
    
  };
  getVideoGames() : Observable<Product[]>{
    return this.http.get<Product[]>(this.videogamesUrl)
    .pipe(
      catchError(this.handleError('getVideoGames', []))
    );
  }
  getMovies() : Observable<Product[]>{
    return this.http.get<Product[]>(this.moviessUrl)
    .pipe(
      catchError(this.handleError('getMovies', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}
}
