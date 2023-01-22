import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { MovieByIdComponent } from './components/movie-by-id/movie-by-id.component';
import { TopRatedMoviesComponent } from './components/top-rated-movies/top-rated-movies.component';
import { MoviesService } from './services/movies.service';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoritesService } from './services/favorite.service';
import { TopGenresComponent } from './components/top-genres/top-genres.component';

@NgModule({
  declarations: [
    AppComponent,
    AllMoviesComponent,
    TopRatedMoviesComponent,
    MovieByIdComponent,
    FavoritesComponent,
    TopGenresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [MoviesService, FavoritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
