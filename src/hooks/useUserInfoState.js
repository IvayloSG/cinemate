import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import { getUserById } from '../services/authService';

const useUserInfoState = (currentUser) => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        if (!currentUser) {
            navigate('/login');
            return;
        }
        let isMounted = true;

        getUserById(currentUser.uid)
            .then(user => {
                if (isMounted) {
                    setUserInfo(user);
                }
            })

        return () => isMounted = false;
    }, [currentUser, navigate]);

    return [
        userInfo,
        setUserInfo
    ]
};

export default useUserInfoState;