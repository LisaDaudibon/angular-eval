import { Component } from '@angular/core'
import { Movie } from './models/app.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MediaSquare'

  constructor() { }

  onQueryChange(data: string) {
    console.log("user searched value", data)
  }
}
