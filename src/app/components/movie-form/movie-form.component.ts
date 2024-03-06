import { MoviesService } from '@/services/movies.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html'
})
export class MovieFormComponent {
  movieForm: FormGroup;

  constructor(private _fb: FormBuilder, private _moviesService: MoviesService) {
    this.movieForm = this._fb.group({
      title: this._fb.control('', [Validators.required]),
      picture: this._fb.control('https://fr.web.img5.acsta.net/medias/nmedia/00/00/00/33/spiderman.jpg'),
      release_date: this._fb.control(2020, [Validators.required]),
      realisator: this._fb.control('', [Validators.required]),
      rating: this._fb.control(0, [Validators.required]),
      categories: this._fb.control('', [Validators.required]),
      synopsis: this._fb.control('', [Validators.required])
    })
  }

  addMovie(){
    this.movieForm.value.rating = parseInt(this.movieForm.value.rating)
    this.movieForm.value.release_date = parseInt(this.movieForm.value.release_date)
    this.movieForm.value.categories = this.movieForm.value.categories.split(', ')
    this._moviesService.addMovie(this.movieForm.value)
  }

  get title() {
    return this.movieForm.get('title')!
  }

  get release_date() {
    return this.movieForm.get('release_date')!
  }

  get realisator() {
    return this.movieForm.get('realisator')!
  }

  get rating() {
    return this.movieForm.get('rating')!
  }

  get categories() {
    return this.movieForm.get('categories')!
  }

  get synospsis() {
    return this.movieForm.get('synopsis')!
  }
}
