import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import './Reviews.css'
import { useAuthContext } from '../../contexts/AuthContext';
import { getAllReviews } from '../../services/reviewsService.js'
import Loader from '../Shared/Loader/Loader.js';
import SingleReview from './SingleReview/SingleReview';

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const authData = useAuthContext();

    useEffect(() => {
        let isMounted = true;

        getAllReviews()
            .then(review => {
                if (isMounted) {
                    setReviews(review);
                }
            })
            .catch((error) => {
                console.log(error.message)
            });

        return () => isMounted = false;
    }, []);

    if (!authData.user) {
        return <Navigate to="/login" />
    }

    return (
        <section className="reviews">
            {!reviews || reviews.length === 0
                ? <Loader />
                : reviews.map(m => <SingleReview key={m.id} review={m} />)
            }
        </section>
    );
}

export default Reviews;