import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './SingleReview.css';
import constants from '../../../constants';
import { useAuthContext } from '../../../contexts/AuthContext';
import { updateReviewsCollection, deleteReviewById } from '../../../services/reviewsService.js';
import { getUserById, updateUserCollection } from '../../../services/authService';

function SingleReview({ review }) {
    const [isDeleted, setIsDeleted] = useState(false);
    const navigate = useNavigate();
    const authData = useAuthContext();
    const [isLiked, setIsLiked] = useState(review.likes.find(id => id === authData.user.uid));
    const isAuthor = authData.user.uid === review.ownerId;

    const reviewLikeOnclickHandler = async () => {
        if (isAuthor || isLiked) {
            return;
        }

        review.likes.push(authData.user.uid);
        await updateReviewsCollection(review);

        setIsLiked(true);
    }

    const reviewDislikeOnclickHandler = async () => {
        if (isAuthor || !isLiked) {
            return;
        }

        const removeIndex = review.likes.findIndex(id => id === authData.user.uid);
        review.likes.splice(removeIndex, 1);
        await updateReviewsCollection(review);

        setIsLiked(false);
    }

    const reviewDeleteOnClickHandler = async () => {
        if (!isAuthor) {
            return;
        }
        try {
            const author = await getUserById(authData.user.uid);
            const removeIndex = author.reviews.findIndex(r => r.id === review.id);
            author.reviews.splice(removeIndex, 1);
            updateUserCollection(author);

            await deleteReviewById(review.id);
            setIsDeleted(true)
            navigate('/reviews');
        } catch (error) {
            console.log(error.message);
        }
        return;
    }

    return (
        <>
            {!isDeleted
                ? (<section className="review">
                    <section className="reviwe-info-container">
                        <article className="review-img">
                            <img
                                className="review-img-picture"
                                src={constants.apiImageUrl + review.moviePoster}
                                alt="movie-poster"
                            />
                        </article>
                        <article className="review-info">
                            <h1 className="review-info-title">Movie: {review.movieTitle}</h1>
                            <h4 className="review-info-author">Author: {review.userEmail}</h4>
                            <h4 className="review-info-author">Votes: {review.likes.length}</h4>
                            <section className="review-info-icons">
                                {!isAuthor
                                    ? (!isLiked ? <i className="fas fa-thumbs-up" onClick={reviewLikeOnclickHandler}></i> : <i className="fas fa-thumbs-down" onClick={reviewDislikeOnclickHandler}></i>)
                                    : ""}
                                {isAuthor ? <Link to={`/reviews/edit/${review.id}`} className="review-info-icons-link"><i className="fas fa-edit"></i></Link> : ""}
                                {isAuthor ? <i className="fas fa-trash-alt" onClick={reviewDeleteOnClickHandler}></i> : ""}
                            </section>
                        </article>
                    </section>
                    <article className="review-content">
                        <h1 className="review-content-summary">{review.summary}</h1>
                        <p className="review-content-text">{review.content}</p>
                    </article>
                </section>)
                : ""
            }
        </>
    );
}

export default SingleReview;