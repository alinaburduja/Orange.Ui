import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { Favorite } from '../models/favorite.model';

@Injectable()
export class FavoritesService {
    url = 'https://localhost:44335/favorites';
    constructor(private http: HttpClient) { }

    getAll(): Observable<Favorite[]> {
        return this.http.get<Favorite[]>(this.url);
    }

    addFavorite(id: string) {
        return this.http.post(this.url + '/' + id, {});
    }

    removeFavorite(id: string) {
        return this.http.delete(this.url + '/' + id);
    }
}