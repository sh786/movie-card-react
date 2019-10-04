import React, { useState, useEffect } from 'react';
import './MovieCard.css';

const MovieCard = ({ apiKey, apiUrl, movieID }) => {
  const [movieData, setMovieData] = useState([]);
  const [isMovieDataLoaded, setIsMovieDataLoaded] = useState(false);

  useEffect(() => {
    const getMovieData = async () => {
      const response = await fetch(`${apiUrl}?apiKey=${apiKey}&i=${movieID}`);

      response
        .json()
        .then(res => {
          console.log(`Movie Data: ${res}`);
          setMovieData(res);
          setIsMovieDataLoaded(true);
        })
        .catch(err => {
          console.log(err);
        });
    };

    getMovieData();
  }, [apiUrl, apiKey, movieID]);

  return (
    <div className='movieCard'>
      {!isMovieDataLoaded ? (
        <p>Loading...</p>
      ) : (
        <React.Fragment>
          <div className='posterContainer'>
            <img src={movieData.Poster} alt={movieData.Title} />
          </div>
          <div className='info'>
            <h1 className='movieTitle'>{movieData.Title}</h1>
            <div className='movieRatingsContainer'>
              <p className='movieRating'>
                {Array.apply(0, Array(Math.floor(movieData.imdbRating))).map(
                  (item, index) => {
                    console.log(index);
                    return <i className='fa fa-star' key={index} />;
                  }
                )}
              </p>
              <p className='movieVotes'>{movieData.imdbVotes} ratings</p>
            </div>
            <div className='movieInfoDivider'></div>
            <p className='moviePlot'>{movieData.Plot}</p>
            <div className='actorsContainer'>
              {movieData.Actors.split(', ').map((actor, i) => {
                return <Actor actor={actor} key={i} />;
              })}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

const Actor = ({ actor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = e => {
    setIsHovered(true);
  }

  const handleMouseLeave = e => {
    setIsHovered(false);
  }

  return (
    <div className='actorContent' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p className='actorIcon'>
        {actor.split(' ')[0][0] + actor.split(' ')[1][0]}
      </p>
      {isHovered ? <p className='actorTooltip'>{actor}</p> : null}
    </div>
  );
};

export default MovieCard;
