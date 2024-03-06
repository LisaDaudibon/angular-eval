import { Movie } from '@/models/app.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
})
export class SingleMovieComponent {
  @Input({ required: true })
  public movie!: Movie
}
