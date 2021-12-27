import { Navigate } from 'react-router-dom';

import './Profile.css';
import { useAuthContext } from '../../contexts/AuthContext';
import Loader from '../Shared/Loader/Loader';
import ProfileReviewCard from './ProfileReviewCard/ProfileReviewCard';
import WatchListCard from './WatchingListCard/WatchListCard';
import useUserInfoState from '../../hooks/useUserInfoState';

function Profile() {
    const authData = useAuthContext();
    const [userInfo] = useUserInfoState(authData.user);

    if (!authData.user) {
        return <Navigate to="/login"/>;
    }

    const profilePage = (
        <section className="profile">
            <h1 className="profile-title">Welcome, {authData.user.email}</h1>
            <hr className='profile-horizontal-line' />
            <section className="profile-watch-list">
                {userInfo && userInfo.watchList
                    ? userInfo.watchList.map(wm => <WatchListCard key={wm.movieId} movie={wm} />)
                    : ""
                }
            </section>
            <hr className='profile-horizontal-line' />
            <section className="profile-reviews">
                {userInfo && userInfo.reviews
                    ? userInfo.reviews.map(r => <ProfileReviewCard key={r.id} review={r} />)
                    : ""
                }
            </section>
        </section>
    );

    return (
        <section className='profile-wrapper'>
            {!userInfo || !userInfo.email
                ? <Loader />
                : profilePage
            }
        </section>
    );
}

export default Profile;