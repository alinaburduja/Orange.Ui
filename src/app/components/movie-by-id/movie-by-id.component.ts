import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-by-id',
  templateUrl: './movie-by-id.component.html',
  styleUrls: ['./movie-by-id.component.scss']
})
export class MovieByIdComponent implements OnInit {
  movie: Movie = {} as Movie;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    const id = (this.route.snapshot.paramMap.get('id'))?.toString() ?? '1';
    this.moviesService.getById(id).subscribe(result => {
      this.movie = result;
    });
  }
}
