import React,{useContext} from 'react'
import SessionApi from '../../api/SessionApi';
import { CreateSession } from '../../application/models/SessionModels';
import { setCookie } from '../../utils/CookieAccess';
import { setAuthHeader } from '../../api/AxiosInstance';
import { AuthContext } from '../../auth/AuthProvider';
import useLogout from '../../auth/LogoutHook';
import useLoadUserDetails from '../../auth/LoadUserDetailsHook';

import Button from '../../shared/Button'
import { Title } from '../../shared/Typograpgy';
import LoginForm from './components/LoginForm';

const Login = () => {
    const authContext = useContext(AuthContext);
    const logout =  useLogout();
    const loadUserDetails = useLoadUserDetails();

    const sessionData:CreateSession = {
        email:"jaya123@gmail.com",
        password:"123456"
    }

    const handleSubmit = async ()=>{
        try{
            const sessionResponse = await SessionApi.createSessionAsync(sessionData);
            setCookie('access-token', sessionResponse.accessToken, 1);
            setCookie('refresh-token', sessionResponse.refreshToken, 90);
            setAuthHeader(sessionResponse.accessToken);
            loadUserDetails();
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            {authContext?.auth.loading&&(
                <div>Loading...</div>
            )}
            {authContext?.auth.authenticated?(
                <>
                    <Title>{authContext?.auth.userDetails?.user.email}</Title>
                    <Button onClick={logout}>Logout</Button>
                </>  
            ):(
                <LoginForm />
            )}
        </div>
    )
}

export default Login