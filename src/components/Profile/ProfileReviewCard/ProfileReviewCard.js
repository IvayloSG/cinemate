import './ProfileReviewCard.css';

function ProfileReviewCard({review}) {
    return (
        <article className="profile-review-card">
            <section className="profile-review-card-info">
                <h1 className="profile-review-card-info-title">Movie: {review.movieTitle}</h1>
                <h1 className="profile-review-card-info-title">Votes: {review.likes.length}</h1>
            </section>
            <section className="profile-review-card-content">
                <h1 className="profile-review-card-content-title">{review.summary}</h1>
                <p className="profile-review-card-content-text">{review.content}</p>
            </section>
        </article>
    );
}

export default ProfileReviewCard;