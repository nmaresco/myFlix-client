import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import axios from 'axios'

export class MainView extends React.Component
{
    constructor(){
        super();
        this.state = {
            movies: [{
              Title: "Vertigo",
              Description: "A former San Francisco police detective juggles wrestling with his personal demons and becoming obsessed with the hauntingly beautiful woman he has been hired to trail.",
              ImagePath: "http://cdn8.openculture.com/wp-content/uploads/2014/02/Vertigomovie_restoration.jpg"
            },{
              Title: "The Birds",
              Description: "The birds go all crazy and start attacking the town folk. It's a bad time.",
              ImagePath: "https://tse4.mm.bing.net/th?id=OIP.BCbQQYSYf0QB2wka-B5VCQHaLX&pid=Api&P=0"
            },
            {
              Title: "Meet the Fockers",
              Description: "All hell breaks loose when the Byrnes family meets the Focker family for the first time.",
              ImagePath: "https://img.moviesrankings.com/t/p/w1280/6q8woibxmiyKTeMyCxl9W7GL6I6.jpg"
            }],
            selectedMovie: null
        }
    }
    setSelectedMovie(newSelectedMovie) {
      this.setState({
        selectedMovie: newSelectedMovie
      });
    }

    // componentDidMount() {
    //   axios.get('http://localhost:8080/movies')
    //   .then((response) => {
    //     console.log("response: ", response)
    //     console.log("response.data: ", response.data)
    //     this.setState({
    //       movies: response.data,
    //       selectedMovie: null
    //     })
    //   }).catch((err) => {
    //     console.log("error: ", err)
    //   })
    // }

    render() {
      const { movies, selectedMovie } = this.state;
  
  
      if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
  
      return (
        <div className="main-view">
          {selectedMovie
            ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
            : movies.map(movie => (
              <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
            ))
          }
        </div>
      );
    }
}


export default MainView;