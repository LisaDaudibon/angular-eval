import { Movie } from '@/models/app.model'
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
})
export class MovieCardComponent {
  @Input({ required: true })
  public movie!: Movie

  @Output('starred')
  public starredEvent = new EventEmitter<Movie>()

  onStarClick() {
    this.starredEvent.emit(this.movie)
  }
}
