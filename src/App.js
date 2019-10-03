import React from 'react'
import MovieCard from './MovieCard'
import './App.css'

const API_KEY = 'c2ecec45'
const API_URL = 'https://www.omdbapi.com'
const MOVIE_ID = 'tt0120623'

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <MovieCard />
      </div>
    </div>
  )
}

export default App
