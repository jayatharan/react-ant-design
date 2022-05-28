import React from 'react'
import { useNavigate } from "react-router-dom";
import  { Formik, Form, FormikValues, FormikHelpers } from 'formik';
import { CreateSession } from '../../../application/models/SessionModels';
import loginFormModel from ".//loginForm/loginFormModel";
import loginFormvalidationSchema from "./loginForm/loginFormValidation";
import loginFormInitialValue from "./loginForm/loginFormInitialValue";
import SessionApi from '../../../api/SessionApi';
import useLoadUserDetails from '../../../auth/LoadUserDetailsHook';

import TextField from '../../../shared/formFields/TextField';
import Button from '../../../shared/Button';
import { setCookie } from '../../../utils/CookieAccess';
import { setAuthHeader } from '../../../api/AxiosInstance';
import { Title } from '../../../shared/Typograpgy';
import { Space, Row, Col } from 'antd';

const {
    formField: { email, password },
} = loginFormModel;

const LoginForm = () => {
    const navigate = useNavigate();
    const loadUserDetails = useLoadUserDetails();

    const handleSubmit = async (
        values: FormikValues,
        actions: FormikHelpers<FormikValues>
    ) => {
        const data:CreateSession = {...values};
        try{
            const sessionResponse = await SessionApi.createSessionAsync(data);
            setCookie('access-token', sessionResponse.accessToken, 1);
            setCookie('refresh-token', sessionResponse.refreshToken, 90);
            setAuthHeader(sessionResponse.accessToken);
            loadUserDetails();
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div style={{maxWidth:'600px', marginInline:'auto', marginTop:'30px'}}>
            <Formik
                initialValues={loginFormInitialValue}
                onSubmit={handleSubmit}
                validationSchema={loginFormvalidationSchema}
            >
                {(formik) => (
                    <Form>
                        <Space direction="vertical" size="large" style={{ display: 'flex', marginInline:'10px' }}>
                            <Title level={2}>Login</Title>
                            <TextField 
                                name={email.name} 
                                label={email.label} 
                                size='large' 
                                type='email' 
                            />
                            <TextField 
                                name={password.name} 
                                label={password.label} 
                                size='large' 
                                type='password' 
                            />
                            <Button 
                                type='primary'
                                shape='round'
                                size='large'
                                style={{width:'100%'}}
                                onClick={()=>formik.submitForm()}
                            >
                                Login
                            </Button>
                        </Space>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginForm