import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React, { useEffect, useContext } from 'react'
import { TopMoviesContext } from '../contexts/TopMoviesContext'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      topMovieHeader: {
        paddingBottom: 0
      },
      topMovieList: {
        paddingTop: 0
      },
      topMovieItem: {
       padding: '2px 0'
      }
  })
)

const TopMovies = () => {

    const classes = useStyles()

    //context
    const { topMovies, getTopMovies, toggleWatched } = useContext(TopMoviesContext)

    useEffect(() => {
      getTopMovies()
    
    }, []);

    return (
        <Box mt={2} ml={2}>
            <Card raised>
                <CardHeader
                  title='Top 10 Movies of all time' 
                  className={classes.topMovieHeader}
                  titleTypographyProps={{ 
                    variant: 'h4',
                    align: 'center',
                    color: 'primary'
                  }}
                />
                <CardContent 
                  className={classes.topMovieList}
                >
                 <List>
                   {topMovies.map(movie => (
                       <ListItem
                        key={movie.imdbID}
                        button
                        className={classes.topMovieItem}
                       >
                        <ListItemIcon>
                            <Checkbox
                              onClick={() => toggleWatched(movie.imdbID)}
                              checked={movie.Watched}
                            />
                        </ListItemIcon>
  
                        <ListItemText primary={movie.Title}/>
                      </ListItem>
                   ))}
                  
                 </List>
                </CardContent>
            </Card>
        </Box>
    )
}

export default TopMovies
