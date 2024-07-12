import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.movie = this.movieService.getMovieById(id);
  }

  formatDuration(minutes: number): string {
    return this.movieService.formatDuration(minutes);
  }

  formatCurrency(amount: number): string {
    return this.movieService.formatCurrency(amount);
  }

  goBack(): void {
    this.router.navigate(['/movies']);
  }
}
