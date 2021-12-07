import { useState, useEffect } from 'react';
import NowPlayingMovie from './NowPlayingMovie/NowPlayingMovie'
import { getNowPlaying } from '../../../services/movieService.js'
import './NowPlayingList.css';

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