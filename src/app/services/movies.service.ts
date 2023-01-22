import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable()
export class MoviesService {
  url = 'https://localhost:44335/movies';
  constructor(private http: HttpClient) { }

  getAll(page: number, pageSize: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + '?page=' + page.toString() + '&pageSize=' + pageSize.toString());
  }

  getTopRated(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + '/topRated');
  }

  getById(id: string): Observable<Movie> {
    return this.http.get<Movie>(this.url + '/' + id);
  }

  getMoviesByTopGenres() {
    return this.http.get(this.url + '/topGenres');
  }
}