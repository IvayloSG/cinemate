import { useState, useEffect } from 'react';

import { getReviewDetailsById } from '../services/reviewsService.js';

const useReviewEditState = (reviewId) => {
    const [reviewDetails, setReviewDetails] = useState({});

    useEffect(() => {
        let isMounted = true;

        getReviewDetailsById(reviewId)
            .then(review => {
                if (isMounted) {
                    setReviewDetails(review);
                }
            })

        return () => isMounted = false;
    }, [reviewId]);

    return [
        reviewDetails,
        setReviewDetails
    ]
};

export default useReviewEditState;