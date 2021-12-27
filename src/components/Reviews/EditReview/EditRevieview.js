import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useUserInfoState from '../../../hooks/useUserInfoState.js';
import useReviewEditState from '../../../hooks/useReviewEditState.js';
import { useAuthContext } from '../../../contexts/AuthContext';
import { updateUserCollection } from '../../../services/authService.js';
import { updateReviewsCollection } from '../../../services/reviewsService.js';
import './EditReview.css';

function EditReview() {
    const { reviewId } = useParams();
    const navigate = useNavigate();
    const authData = useAuthContext();
    const [errorState, setErrorState] = useState(false);
    const [userInfo] = useUserInfoState(authData.user);
    const [reviewDetails] = useReviewEditState(reviewId);

    const editReviewSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const summary = formData.get('form-title');
        const content = formData.get('form-text');

        if (summary.length < 3) {
            setErrorState('The summary of review must be at least 3 characters!');
            setTimeout(() => {
                setErrorState('');
            }, 10000);

            return;
        }

        if (content.length < 5) {
            setErrorState('The review must be at least 5 characters!');
            setTimeout(() => {
                setErrorState('');
            }, 10000);

            return;
        }

        reviewDetails.summary = summary;
        reviewDetails.content = content;

        const userReview = userInfo.reviews.find(r => r.id === reviewDetails.id);
        userReview.summary = summary;
        userReview.content = content;

        updateUserCollection(userInfo);
        updateReviewsCollection(reviewDetails);

        navigate('/reviews');
        return;
    }

    const editReviewClickErrorHandler = () => {
        setErrorState(false);
    }

    return (
        <section className="edit-review">
            <h1 className="edit-review-title">Edit review for {reviewDetails.movieTitle}</h1>
            <h6 className="edit-review-message" onClick={editReviewClickErrorHandler}>{errorState}</h6>
            <form className="edit-review-form" method="POST" onSubmit={editReviewSubmitHandler}>
                <div className="edit-review-form-field-container-input">
                    <label htmlFor='form-title'>Summary</label>
                    <input
                        id="edit-review-form-title"
                        className="edit-review-form-title"
                        name="form-title"
                        type="text"
                        defaultValue={reviewDetails.summary}></input>
                </div>
                <div className="edit-review-form-field-container">
                    <label htmlFor='form-text'>Review</label>
                    <textarea
                        id="edit-review-form-text"
                        className="edit-review-form-text"
                        name="form-text"
                        rows={10}
                        cols={5}
                        defaultValue={reviewDetails.content}></textarea>
                </div>
                <div className="edit-review-form-field-container-button">
                    <input className="edit-review-form-submit" type="submit" value="Update"></input>
                </div>
            </form>
        </section>
    );
}

export default EditReview;