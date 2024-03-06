import { Movie } from '@/models/app.model'
import { MoviesService } from '@/services/movies.service'
import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  $fetchMovies: Observable<Movie[]>;

  constructor(private _movieService: MoviesService, private _router: Router){ 
    this.$fetchMovies = this._movieService.fetchAllMovies();
  }

  trackByMovieId(id: number, movie: Movie): number { return movie.id}

  movieDetailRedirect(id: string) {
    this._router.navigateByUrl(`/movies/${id}`)
  }

  // public spiderMan: Movie = {
  //   "title": "Spider-Man",
  //   "picture": "https://fr.web.img5.acsta.net/medias/nmedia/00/00/00/33/spiderman.jpg",
  //   "synopsis": "Mordu par une araignée génétiquement modifiée, un lycéen nerveux, timide et maladroit acquiert des capacités semblables à celles d'une araignée qu'il doit utiliser pour combattre le mal en tant que super-héros après qu'une tragédie s'abatte sur sa famille.",
  //   "release_date": 2002,
  //   "realisator": "Sam Raimi",
  //   "rating": 7.3,
  //   "categories": [
  //     "Action",
  //     "Science-fiction"
  //   ],
  //   "starred": false,
  //   "id": 2
  // }
}
