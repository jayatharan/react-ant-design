import React,{useContext, useEffect} from 'react'
import { AuthContext } from '../../auth/AuthProvider';
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from '../../application/constants/AppRoutes';

import LoginForm from './components/LoginForm';

const Login = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if(authContext?.auth.authenticated){
            navigate(`/${APP_ROUTES.DASHBOARD}`)
        }
    },[authContext])

    return (
        <div>
            <LoginForm />
        </div>
    )
}

export default Login