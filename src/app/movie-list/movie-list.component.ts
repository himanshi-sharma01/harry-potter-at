import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  searchKeyword: string = '';
  searchYearVar: any;

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movies = this.movieService.getMovies();
  }

  search(): void {
    if (this.searchKeyword.trim() === '') {
      this.loadMovies(); 
    } else {
      this.movies = this.movieService.searchMovies(this.searchKeyword);
    }
  }

  searchYear(): void {
    if (this.searchYearVar===0) {
      this.loadMovies();
    } else {
      this.movies = this.movieService.filterMoviesByYear(this.searchYearVar);
    }
  }

  onSelectMovie(movieId: number): void {
    this.router.navigate(['/movies', movieId]);
  }

  formatDuration(minutes: number): string {
    return this.movieService.formatDuration(minutes);
  }

  formatCurrency(amount: number): string {
    return this.movieService.formatCurrency(amount);
  }
}
