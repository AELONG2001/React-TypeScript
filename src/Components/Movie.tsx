import React, { ChangeEvent, useContext, useState } from 'react'
import { Box, Button, Chip, PropTypes, TextField } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { MovieContext } from '../contexts/MovieContext'
import { ThemeContext } from '../contexts/ThemeContext'

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
     movieInput: {
       marginRight: '5px'
     },
     movieChip: {
       fontSize: '2rem',
       padding: '30px 10px',
       margin: '5px',
     }
  })
)


const Movie = () => {

  const classes = useStyles()

   const [movie, setMovie] = useState('')

   //context
   const { theme } = useContext(ThemeContext)
   const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>
   const { movies, addMovie, deleteMovie } = useContext(MovieContext)

   const movieInputChange = 
      (event: ChangeEvent<HTMLInputElement>) => 
         setMovie(event.target.value)

    return (
        <>
            <Box
             display='flex'
             justifyContent='center'
             my={5}
            >
              <TextField
               className={classes.movieInput}
               value={movie}
               onChange={movieInputChange}
               label='Your favouritem movie...' 
               variant='outlined'
              />
              <Button
                onClick={() => {
                    addMovie(movie)
                    setMovie('')
                    }
                }
                variant='contained'
                color='primary'
              >
               Add
              </Button>
            </Box>

            <Box
             display='flex'
             justifyContent='center'
             flexWrap='wrap'
             mx={5}
            >
              {movies.map(movie => (
                  <Chip
                    key={movie.id}
                    className={classes.movieChip}
                    color={chipTheme}
                    label={movie.title}
                    clickable
                    onDelete={deleteMovie.bind(this, movie.id)}
                  />
              ))}
            </Box>
        </>
    )
}

export default Movie
