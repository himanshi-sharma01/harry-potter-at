import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Harry Potter and the Philosopher\'s Stone',
      duration: 152, 
      budget: 125000000,
      releaseDate: '2001-11-16',
      boxOffice: 974755371, 
      poster: 'assets/Harry.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatem expedita officiis sed rem veritatis dicta molestiae suscipit, temporibus nesciunt assumenda, dolor repellendus quam minima cupiditate commodi? Veniam quos sequi, dicta debitis deleniti commodi voluptatibus, qui deserunt aliquid fugit incidunt sunt ratione quam vero assumenda dolorum dolor iste perspiciatis iusto.',
      producers: ['Jaydeep Dahiwal', 'Rishikesh Shukla'],
      cinematographers: ['Himanshi', 'Gowri Jadhav']
    },
    {
      id: 2,
      title: 'Harry Potter and the Chamber of Secrets',
      duration: 161,
      budget: 100000000,
      releaseDate: '2002-11-15',
      boxOffice: 879465646,
      poster: 'assets/Harry2.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatem expedita officiis sed rem veritatis dicta molestiae suscipit, temporibus nesciunt assumenda, dolor repellendus quam minima cupiditate commodi? Veniam quos sequi, dicta debitis deleniti commodi voluptatibus, qui deserunt aliquid fugit incidunt sunt ratione quam vero assumenda dolorum dolor iste perspiciatis iusto.',
      producers: ['Jaydeep Dahiwal', 'Rishikesh Shukla'],
      cinematographers: ['Himanshi', 'Gowri Jadhav']
    },
    {
      id: 3,
      title: 'Harry Potter and the Prisoner of Azkaban',
      duration: 142,
      budget: 130000000,
      releaseDate: '2004-06-04',
      boxOffice: 796688549,
      poster: 'assets/Harry3.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatem expedita officiis sed rem veritatis dicta molestiae suscipit, temporibus nesciunt assumenda, dolor repellendus quam minima cupiditate commodi? Veniam quos sequi, dicta debitis deleniti commodi voluptatibus, qui deserunt aliquid fugit incidunt sunt ratione quam vero assumenda dolorum dolor iste perspiciatis iusto.',
      producers: ['Jaydeep Dahiwal', 'Rishikesh Shukla'],
      cinematographers: ['Himanshi', 'Gowri Jadhav']
    },
    {
      id: 4,
      title: 'Harry Potter and the Goblet of Fire',
      duration: 157,
      budget: 150000000,
      releaseDate: '2005-11-18',
      boxOffice: 896911078,
      poster: 'assets/Harry4.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatem expedita officiis sed rem veritatis dicta molestiae suscipit, temporibus nesciunt assumenda, dolor repellendus quam minima cupiditate commodi? Veniam quos sequi, dicta debitis deleniti commodi voluptatibus, qui deserunt aliquid fugit incidunt sunt ratione quam vero assumenda dolorum dolor iste perspiciatis iusto.',
      producers: ['Jaydeep Dahiwal', 'Rishikesh Shukla'],
      cinematographers: ['Himanshi', 'Gowri Jadhav']
    },
    {
      id: 5,
      title: 'Harry Potter and the Order of the Phoenix',
      duration: 138,
      budget: 150000000,
      releaseDate: '2007-07-11',
      boxOffice: 942943935,
      poster: 'assets/Harry5.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatem expedita officiis sed rem veritatis dicta molestiae suscipit, temporibus nesciunt assumenda, dolor repellendus quam minima cupiditate commodi? Veniam quos sequi, dicta debitis deleniti commodi voluptatibus, qui deserunt aliquid fugit incidunt sunt ratione quam vero assumenda dolorum dolor iste perspiciatis iusto.',
      producers: ['Jaydeep Dahiwal', 'Rishikesh Shukla'],
      cinematographers: ['Himanshi', 'Gowri Jadhav']
    },
    {
      id: 6,
      title: 'Harry Potter and the Half-Blood Prince',
      duration: 153,
      budget: 250000000,
      releaseDate: '2009-07-15',
      boxOffice: 934416487,
      poster: 'assets/Harry6.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatem expedita officiis sed rem veritatis dicta molestiae suscipit, temporibus nesciunt assumenda, dolor repellendus quam minima cupiditate commodi? Veniam quos sequi, dicta debitis deleniti commodi voluptatibus, qui deserunt aliquid fugit incidunt sunt ratione quam vero assumenda dolorum dolor iste perspiciatis iusto.',
      producers: ['Jaydeep Dahiwal', 'Rishikesh Shukla'],
      cinematographers: ['Himanshi', 'Gowri Jadhav']
    },
    {
      id: 7,
      title: 'Harry Potter and the Deathly Hallows – Part 1',
      duration: 146,
      budget: 250000000,
      releaseDate: '2010-11-19',
      boxOffice: 976920886,
      poster: 'assets/Harry7.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatem expedita officiis sed rem veritatis dicta molestiae suscipit, temporibus nesciunt assumenda, dolor repellendus quam minima cupiditate commodi? Veniam quos sequi, dicta debitis deleniti commodi voluptatibus, qui deserunt aliquid fugit incidunt sunt ratione quam vero assumenda dolorum dolor iste perspiciatis iusto.',
      producers: ['Jaydeep Dahiwal', 'Rishikesh Shukla'],
      cinematographers: ['Himanshi', 'Gowri Jadhav']
    },
    {
      id: 8,
      title: 'Harry Potter and the Deathly Hallows – Part 2',
      duration: 130,
      budget: 250000000,
      releaseDate: '2011-07-15',
      boxOffice: 1341511219,
      poster: 'assets/Harrry8.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatem expedita officiis sed rem veritatis dicta molestiae suscipit, temporibus nesciunt assumenda, dolor repellendus quam minima cupiditate commodi? Veniam quos sequi, dicta debitis deleniti commodi voluptatibus, qui deserunt aliquid fugit incidunt sunt ratione quam vero assumenda dolorum dolor iste perspiciatis iusto.',
      producers: ['Jaydeep Dahiwal', 'Rishikesh Shukla'],
      cinematographers: ['Himanshi', 'Gowri Jadhav']
    }
  ];

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  searchMovies(keyword: string): Movie[] {
    keyword = keyword.toLowerCase();
    return this.movies.filter(movie =>
      movie.title.toLowerCase().includes(keyword) ||
      new Date(movie.releaseDate).getFullYear().toString().includes(keyword)
    );
  }

  filterMoviesByYear(year: number): Movie[] {
    return this.movies.filter(movie =>
      new Date(movie.releaseDate).getFullYear() === year
    );
  }

  formatDuration(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  }

  formatCurrency(amount: number): string {
    return `$${(amount / 1000000).toFixed(1)}M`;
  }
}
