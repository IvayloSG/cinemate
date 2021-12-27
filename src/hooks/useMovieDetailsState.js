import { useState, useEffect } from 'react';

import { getMovieDetailsById } from '../services/movieService';

const useMovieDetailsState = (movieId) => {
    const [movieDetails, setMovieDetails] = useState({});

    useEffect(() => {
        let isMounted = true;

        getMovieDetailsById(movieId)
            .then(movie => {
                if (isMounted) {
                    setMovieDetails(movie);
                }
            })

            return () => isMounted = false;
    }, [movieId]);

    return [
        movieDetails,
        setMovieDetails
    ]
};

export default useMovieDetailsState;