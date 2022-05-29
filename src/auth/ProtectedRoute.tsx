import React, {useContext} from 'react'
import { AuthContext } from './AuthProvider';
import {Navigate} from 'react-router-dom';
import { APP_ROUTES } from '../application/constants/AppRoutes';

import {Spin} from 'antd';
import Page401 from '../modules/errors/Page401'

interface ProtectedRouteProps {
    children: any;
    roles?:string[];
}

const ProtectedRoute = ({ children, roles }: ProtectedRouteProps) => {
    const authContext = useContext(AuthContext);

    if(roles && roles.includes(authContext?.auth.userDetails?.user.role??'none')) return children

    if(authContext?.auth.authenticated) return children

    if(authContext && !authContext.auth.loading) return <Page401 />;

    return children
}

export default ProtectedRoute