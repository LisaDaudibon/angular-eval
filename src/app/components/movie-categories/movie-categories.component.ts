import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-movie-categories',
  templateUrl: './movie-categories.component.html',
})
export class MovieCategoriesComponent {
  @Input()
  public categories: string[] = []
}
