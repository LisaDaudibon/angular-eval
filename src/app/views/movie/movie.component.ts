import { Movie } from '@/models/app.model';
import { MoviesService } from '@/services/movies.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
})
export class MovieComponent {
  $movie!: Observable<Movie>;

  constructor (private _movieService: MoviesService, public _activatedRoute: ActivatedRoute, private _router: Router) {
    const movieId: string | null = this._activatedRoute.snapshot.paramMap.get('id')
    if (movieId && !Number.isNaN(movieId)){
      this.$movie = this._movieService.fetchMovieById(movieId)
    } else {
      console.error("L'id passé n'est pas valide")
      this._router.navigateByUrl('')
    }
  }
}
