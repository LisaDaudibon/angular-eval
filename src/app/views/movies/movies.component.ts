
import { Movie } from '@/models/app.model'
import { Component } from '@angular/core'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {

  public dune: Movie = {
    "title": "Dune",
    "picture": "https://fr.web.img6.acsta.net/pictures/21/08/10/12/20/4633954.jpg",
    "synopsis": "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
    "release_date": 2021,
    "realisator": "Denis Villeneuve",
    "rating": 8.3,
    "categories": [
      "Science-fiction"
    ],
    "starred": true,
    "id": 1
  }

  public spiderMan: Movie = {
    "title": "Spider-Man",
    "picture": "https://fr.web.img5.acsta.net/medias/nmedia/00/00/00/33/spiderman.jpg",
    "synopsis": "Mordu par une araignée génétiquement modifiée, un lycéen nerveux, timide et maladroit acquiert des capacités semblables à celles d'une araignée qu'il doit utiliser pour combattre le mal en tant que super-héros après qu'une tragédie s'abatte sur sa famille.",
    "release_date": 2002,
    "realisator": "Sam Raimi",
    "rating": 7.3,
    "categories": [
      "Action",
      "Science-fiction"
    ],
    "starred": false,
    "id": 2
  }
}
