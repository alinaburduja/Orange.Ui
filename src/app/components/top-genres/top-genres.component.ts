import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top-genres',
  templateUrl: './top-genres.component.html',
  styleUrls: ['./top-genres.component.scss']
})
export class TopGenresComponent implements OnInit {
  entries: any[] = [];

  constructor(private moviesService: MoviesService) {
  }
  ngOnInit(): void {
    this.moviesService.getMoviesByTopGenres().subscribe(result => {
      this.entries = Object.entries(result);
    });
  }

  getMovieNames(movies: Movie[]) {
    return movies.map(m => m.originalTitle);
  }
}
