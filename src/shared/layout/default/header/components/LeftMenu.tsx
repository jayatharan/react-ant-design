import React, {useContext, useEffect, useState} from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { APP_ROUTES } from '../../../../../application/constants/AppRoutes';
import useLogout from '../../../../../auth/LogoutHook';

import { Menu, Avatar } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined } from "@ant-design/icons";
import { AuthContext } from '../../../../../auth/AuthProvider';


const LeftMenu = ({mode}:{mode:'vertical' | 'horizontal' | 'inline'}) => {
    const navigate = useNavigate();
    const location = useLocation()
    const authContext = useContext(AuthContext);
    const logout = useLogout();
    const [key, setKey] = useState('')

    const changeRoute = (route:string)=>{
        navigate(`/${route}`);
    }

    useEffect(()=>{
        const paths = location.pathname.split('/');
        if(paths.length>0){
            setKey(paths[1])
        }
    },[location])

    const handleLogout = ()=>{
        logout();
        navigate(`/${APP_ROUTES.HOME}`);
    }

    return (
    <Menu mode={mode} activeKey={key}>
        <Menu.Item onClick={()=>changeRoute(APP_ROUTES.HOME)} key={APP_ROUTES.HOME}>Home</Menu.Item>
        <Menu.Item onClick={()=>changeRoute(APP_ROUTES.DASHBOARD)} key={APP_ROUTES.DASHBOARD}>Dashboard</Menu.Item>
        <Menu.Item onClick={()=>changeRoute(APP_ROUTES.ABOUT)} key={APP_ROUTES.ABOUT}>About</Menu.Item>
        <Menu.SubMenu
            key={'user'}
            title={
                <>
                    <Avatar icon={<UserOutlined />} />
                    <span className="username">John Doe</span>
                </>
            }
        >
            {authContext?.auth.authenticated?(
                <>
                    <Menu.Item onClick={()=>changeRoute(APP_ROUTES.PROJECTS)} key={APP_ROUTES.PROJECTS}>
                        <CodeOutlined /> Projects
                    </Menu.Item>
                    <Menu.Item onClick={()=>changeRoute(APP_ROUTES.PROFILE)} key={APP_ROUTES.PROFILE}>
                        <UserOutlined /> Profile
                    </Menu.Item>
                    <Menu.Item onClick={handleLogout} key="log-out">
                        <LogoutOutlined /> Logout
                    </Menu.Item>
                </>
            ):(
                <>
                    <Menu.Item onClick={()=>changeRoute(APP_ROUTES.LOGIN)} key={APP_ROUTES.LOGIN}>Login</Menu.Item>
                    <Menu.Item onClick={()=>changeRoute(APP_ROUTES.SIGNUP)} key={APP_ROUTES.SIGNUP}>SignUp</Menu.Item>
                </>
            )}
        </Menu.SubMenu>
    </Menu>
  )
}

export default LeftMenu