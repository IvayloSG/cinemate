import { useNavigate } from 'react-router-dom';

import { logout } from '../../services/authService.js';

function Logout() {
    const navigate = useNavigate();

    logout()
    .then(() => {
        navigate('/');
      }).catch((error) => {
       
      });

    return null;
}

export default Logout;