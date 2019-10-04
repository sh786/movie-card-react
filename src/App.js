import React from 'react'
import MovieCard from './MovieCard'
import './App.css'

const API_KEY = 'c2ecec45'
const API_URL = 'https://www.omdbapi.com'
const MOVIE_ID = 'tt0816692'

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <MovieCard apiKey={API_KEY} apiUrl={API_URL} movieID={MOVIE_ID} />
      </div>
    </div>
  )
}

export default App
