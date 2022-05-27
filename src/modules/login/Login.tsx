import React from 'react'
import SessionApi from '../../api/SessionApi';
import { CreateSession } from '../../application/models/SessionModels';
import { setCookie } from '../../utils/CookieAccess';
import { setAuthHeader } from '../../api/AxiosInstance';

import Button from '../../shared/Button'

const Login = () => {
    
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
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <Button onClick={handleSubmit}>Login</Button>
        </div>
    )
}

export default Login