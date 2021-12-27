import { useState, useEffect } from 'react';

import './NowPlayingList.css';
import { getNowPlaying } from '../../../services/movieService.js'
import NowPlayingMovie from './NowPlayingMovie/NowPlayingMovie'

function NowPlayingList() {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    useEffect(() => {
        getNowPlaying()
        .then(movies => {
            setNowPlayingMovies(movies.results);
        });
    }, []);

    return (
        <section className="now-playing">
                {nowPlayingMovies.map(m => <NowPlayingMovie key={m.id} movie={m} />)}
        </section>
    );
}

export default NowPlayingList;