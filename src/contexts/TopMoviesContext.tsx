
import React, { createContext, ReactNode, useReducer } from 'react'
import { topMoviesReducer, TopMoviesState } from './../reducer/TopMoviesReducer';
import { TopMoviesActionType } from "../reducer/type"
import topMoviesInfo from '../api/getTopMovies';

const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIE_WATCHED } = TopMoviesActionType

const topMoviesDefault:TopMoviesState = []


interface TopMoviesContextDefault {
    topMovies: TopMoviesState,
    getTopMovies: () => Promise<void>,
    toggleWatched: (imdbID: string) => void

}

export const TopMoviesContext = createContext<TopMoviesContextDefault>({
    topMovies: topMoviesDefault,
    getTopMovies: () => Promise.resolve(void 0),
    toggleWatched: (imdbID: string) => {}

})

interface TopMoviesContextProps {
    children: ReactNode
}


const TopMoviesContextProvider = 
({ children }: TopMoviesContextProps) => {
    const [topMovies, dispatch] = 
      useReducer(topMoviesReducer, topMoviesDefault);

    //get top movies from API
    const getTopMovies = async () => {
        const topMovies = await Promise.all(topMoviesInfo)
        dispatch({
            type: GET_TOP_MOVIES,
            payload: topMovies.map(topMovie => ({...topMovie.data, Watched: false}))
        })
    }

    //toggle watched
    const toggleWatched = (imdbID: string) => dispatch({
        type: TOGGLE_TOP_MOVIE_WATCHED,
        payload: imdbID
    })

    const topMovieContextData = {
        topMovies,
        getTopMovies,
        toggleWatched,
    }

    return (
        <TopMoviesContext.Provider value={topMovieContextData}>
            {children}
        </TopMoviesContext.Provider>
    )
}

export default TopMoviesContextProvider