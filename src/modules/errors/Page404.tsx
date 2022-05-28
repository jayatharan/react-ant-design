import React from 'react'
import { Result, Button } from 'antd';
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from '../../application/constants/AppRoutes';

const Page404 = () => {
    const navigate = useNavigate();

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={()=>navigate(`/${APP_ROUTES.HOME}`)}>Back Home</Button>}
        />
    )
}

export default Page404