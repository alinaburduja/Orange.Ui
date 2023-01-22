import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favorite } from 'src/app/models/favorite.model';
import { Movie } from 'src/app/models/movie.model';
import { FavoritesService } from 'src/app/services/favorite.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {
  movies: Movie[] = [];
  favorites: Favorite[] = [];
  page: number = 1;
  pageSize: number = 5;

  constructor(private moviesService: MoviesService, private router: Router, private favoriteService: FavoritesService) {
  }
  ngOnInit(): void {
    this.load();
  }

  onClickPrev() {
    this.page--;
    if (this.page < 1) {
      this.page = 1;
    }
    this.load();
  }

  onClickNext() {
    this.page++;
    this.load();
  }

  load() {
    this.moviesService.getAll(this.page, this.pageSize).subscribe(result => {
      console.log(result);
      this.movies = result;
    });
    this.favoriteService.getAll().subscribe(r => {
      this.favorites = r;
    });
  }

  onById(id: string) {
    this.router.navigate(['movie-by-id', id]);
  }

  onClickAddFavorite(id: string) {
    this.favoriteService.addFavorite(id).subscribe(r => {
      console.log('Success');
      this.load();
    });
  }
  onClickRemoveFavorite(id: string) {
    this.favoriteService.removeFavorite(id).subscribe(r => {
      console.log('Success');
      this.load();
    });
  }

  moviesIsFavorite(id: string) {
    return this.favorites.find(f => f.movie.id == id) != null;
  }
}
