import { Component } from '@angular/core';
import { Favorite } from 'src/app/models/favorite.model';
import { Movie } from 'src/app/models/movie.model';
import { FavoritesService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  favorites: Favorite[] = [];
  constructor(private favoritesService: FavoritesService) {
  }
  ngOnInit(): void {
    this.load();
  }

  load() {
    this.favoritesService.getAll().subscribe(result => {
      console.log(result);
      this.favorites = result;
    });
  }

  onClickRemove(id: string) {
    this.favoritesService.removeFavorite(id).subscribe(r => {
      this.load();
    });
  }
}
