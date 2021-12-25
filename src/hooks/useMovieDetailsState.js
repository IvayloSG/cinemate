import { useState, useEffect } from 'react';

import { getMovieDetailsById } from '../services/movieService';

const useMovieDetailsState = (movieId) => {
    const [movieDetails, setMovieDetails] = useState({});

    useEffect(() => {
        getMovieDetailsById(movieId)
            .then(movie => {
                setMovieDetails(movie);
            })
    }, [movieId]);

    return [
        movieDetails,
        setMovieDetails
    ]
};

export default useMovieDetailsState;