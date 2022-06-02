import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../auth/AuthProvider'
import { Tabs, Form, Input } from 'antd';

const BiographySection = () => {
    const authContext = useContext(AuthContext);
    
    return (
        <div>
            Profile Form
            Profile Content
        </div>
    )
}

export default BiographySection