import { Movie } from '@/models/app.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL=`http://localhost:3000`

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  constructor(private _httpClient: HttpClient) { }

  fetchAllMovies(): Observable<Movie[]>{
    return this._httpClient.get<Movie[]>(`${API_URL}/movies`)
  }

  fetchMovieById(id: string): Observable<Movie> {
    return this._httpClient.get<Movie>(`${API_URL}/movies/${id}`)
  }
}
