import { Movie } from '@/models/app.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

const API_URL=`http://localhost:3000`

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Movie[] = [];
  
  constructor(private _httpClient: HttpClient, private _router: Router) { }

  fetchAllMovies (): Observable<Movie[]>{
    return this._httpClient.get<Movie[]>(`${API_URL}/movies`)
      .pipe(
        tap((movies) => this.movies = movies))
  }

  fetchMovieById (id: string): Observable<Movie> {
    return this._httpClient.get<Movie>(`${API_URL}/movies/${id}`)
  }

  addMovie (movie: Movie): void {
    this._httpClient.post(`${API_URL}/movies`, movie).subscribe(() => {
      console.log(`Le film a bien été ajouté`);
      this.movies.push(movie)
      this._router.navigateByUrl('')
    })
  }
}
