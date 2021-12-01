import axios from "axios";

const topMovieIds = [
    'tt0297163',
    'tt0848228',
    'tt1981107',
    'tt0108174',
    'tt5996792',
    'tt1832382',
    'tt0120913',
    'tt5761766',
    'tt14810626',
    'tt8912936',
]

const topMoviesInfo = topMovieIds.map(id => axios.get(`http://www.omdbapi.com/?i=${id}&apikey=fe5a9562`))

export default topMoviesInfo