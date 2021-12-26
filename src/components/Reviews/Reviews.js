import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { getAllReviews } from '../../services/reviewsService.js'
import SingleReview from './SingleReview/SingleReview';
import './Reviews.css'
import Loader from '../Shared/Loader/Loader.js';

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const authData = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!authData.user) {
            navigate('/login');
            return;
        }
        getAllReviews()
            .then(review => {
                setReviews(review);
            })
            .catch((error) => {
                console.log(error.message)
            });
    }, [authData.user, navigate]);

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