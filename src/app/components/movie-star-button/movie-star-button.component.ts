import {
  Component,
  Input,
} from '@angular/core'

@Component({
  selector: 'app-movie-star-button',
  templateUrl: './movie-star-button.component.html',
})
export class MovieStarButtonComponent {
  @Input()
  public starred: boolean = false


}
