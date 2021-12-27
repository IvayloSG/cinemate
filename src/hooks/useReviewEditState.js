import { useState, useEffect } from 'react';

import { getReviewDetailsById } from '../services/reviewsService.js';

const useReviewEditState = (reviewId) => {
    const [reviewDetails, setReviewDetails] = useState({});

    useEffect(() => {
        getReviewDetailsById(reviewId)
            .then(review => {
                setReviewDetails(review);
            })
    }, [reviewId]);

    return [
        reviewDetails,
        setReviewDetails
    ]
};

export default useReviewEditState;