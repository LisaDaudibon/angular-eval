import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MoviesComponent } from './views/movies/movies.component'
import { MovieComponent } from './views/movie/movie.component'
import { BookmarkedMoviesComponent } from './views/bookmarked-movies/bookmarked-movies.component'
import { MovieFormComponent } from './components/movie-form/movie-form.component'

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieComponent},
  { path: "starred", component: BookmarkedMoviesComponent},
  { path: 'add', component: MovieFormComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
