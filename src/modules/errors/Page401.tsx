import React from 'react'
import { Result, Button } from 'antd';
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from '../../application/constants/AppRoutes';

const Page404 = () => {
    const navigate = useNavigate();

    return (
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary" onClick={()=>navigate(`/${APP_ROUTES.HOME}`)}>Back Home</Button>}
        />
    )
}

export default Page404