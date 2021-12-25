import { useState, useEffect } from 'react';

import { getUserById } from '../services/authService';

const useUserInfoState = (userId) => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        getUserById(userId)
            .then(user => {
                setUserInfo(user);
            })
    }, [userId]);

    return [
        userInfo,
        setUserInfo
    ]
};

export default useUserInfoState;