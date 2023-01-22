import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MovieByIdComponent } from './components/movie-by-id/movie-by-id.component';
import { TopGenresComponent } from './components/top-genres/top-genres.component';
import { TopRatedMoviesComponent } from './components/top-rated-movies/top-rated-movies.component';

const routes: Routes = [
  { path: 'all-movies', component: AllMoviesComponent },
  { path: '', component: AllMoviesComponent },
  { path: 'top-rated-movies', component: TopRatedMoviesComponent },
  { path: 'movie-by-id/:id', component: MovieByIdComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'top-genres', component: TopGenresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
