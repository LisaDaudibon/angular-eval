import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { LucideAngularModule, icons } from 'lucide-angular'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { MovieCardComponent } from './components/movie-card/movie-card.component'
import { MoviesComponent } from './views/movies/movies.component'
import { MovieCategoriesComponent } from './components/movie-categories/movie-categories.component'
import { MovieStarButtonComponent } from './components/movie-star-button/movie-star-button.component'
import { FieldComponent } from './components/ui/field/field.component'
import { ButtonComponent } from './components/ui/button/button.component'
import { MovieComponent } from './views/movie/movie.component'
import { BookmarkedMoviesComponent } from './views/bookmarked-movies/bookmarked-movies.component';
import { SingleMovieComponent } from './components/single-movie/single-movie.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieCardComponent,
    MovieCategoriesComponent,
    MovieStarButtonComponent,
    MoviesComponent,
    FieldComponent,
    ButtonComponent,
    MovieComponent,
    BookmarkedMoviesComponent,
    SingleMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LucideAngularModule.pick(icons),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
