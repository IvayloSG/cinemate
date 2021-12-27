import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import './CreateReview.css';
import { addReviewToCollection } from '../../../services/reviewsService.js'
import { generateId } from '../../../services/utilService.js';
import { getUserById, updateUserCollection } from '../../../services/authService'
import { useAuthContext } from '../../../contexts/AuthContext';
import constants from '../../../constants.js';

function CreateReview() {
    const location = useLocation();
    const authData = useAuthContext();
    const navigate = useNavigate();
    const [errorState, setErrorState] = useState('');

    if (!authData.user || !location.state) {
        return <Navigate to="/"/>
    }

    const createReviewSubmitHandler = async (e) => {
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
            
        const reviewData = {
            id: generateId(constants.reviewIdLength),
            movieId: location.state.movie.id,
            movieTitle: location.state.movie.title,
            moviePoster: location.state.movie.poster_path,
            movieHomePage: location.state.movie.homepage,
            ownerId: authData.user.uid,
            userEmail: authData.user.email,
            summary: summary,
            content: content,
            likes: [],
            comments: [],
        }

        await addReviewToCollection(reviewData);
        const currentUser = await getUserById(authData.user.uid);
        currentUser.reviews.push(reviewData);
        await updateUserCollection(currentUser);

        navigate('/reviews');
    }

    const createReviewClickErrorHandler = () => {
        setErrorState(false);
    }

    console.log(location.state);

    return (
        <section className="create-review">
            <h1 className="create-review-title">{location.state.movie.title}</h1>
            <h6 className="create-review-message" onClick={ createReviewClickErrorHandler }>{errorState}</h6>
            <form className="create-review-form" method="POST" onSubmit={ createReviewSubmitHandler }>
                <div className="create-review-form-field-container-input"> 
                    <label htmlFor='form-title'>Summary</label>
                    <input id="create-review-form-title" className="create-review-form-title" name="form-title" type="text"></input>
                </div>
                <div className="create-review-form-field-container">
                    <label htmlFor='form-text'>Review</label>
                    <textarea id="create-review-form-text" className="create-review-form-text" name="form-text" rows={10} cols={5}></textarea>
                </div>
                <div className="create-review-form-field-container-button">
                    <input className="create-review-form-submit" type="submit" value="Post"></input>
                </div>
            </form>
        </section>
    );
}

export default CreateReview;

