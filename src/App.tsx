import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import ToggleThemeButton from './Components/ToggleThemeButton';
import MovieContextProvider from './contexts/MovieContext';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';
import Movie from './Components/Movie';
import AuthContextProvider from './reducer/AuthContext';
import { Grid } from '@material-ui/core';
import TopMovies from './Components/TopMovies';
import TopMoviesContextProvider from './contexts/TopMoviesContext';

function App() {
  return (
    <div>
      <TopMoviesContextProvider>
        <AuthContextProvider>
          <MovieContextProvider>
            <ThemeContextProvider>
              <ProgressContextProvider>
                <NavBar />
                <Grid container>
                  <Grid item xs={4}>
                    <TopMovies />
                  </Grid>

                  <Grid item xs={8}>
                    <Movie />
                  </Grid>
                </Grid>
                <ToggleThemeButton />
              </ProgressContextProvider>
            </ThemeContextProvider>
          </MovieContextProvider>
        </AuthContextProvider>
      </TopMoviesContextProvider>
    </div>
  );
}

export default App;
