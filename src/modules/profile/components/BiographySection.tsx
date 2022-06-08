import React, { useContext, useEffect, useState } from 'react'
import { Biography } from '../../../application/models/BiographyModels';
import { AuthContext } from '../../../auth/AuthProvider';
import useLoadUserDetails from '../../../auth/LoadUserDetailsHook';
import styled from 'styled-components';

import { Space, Spin, Row, Col } from 'antd';
import Modal from '../../../shared/Modal';
import { Title, Text } from '../../../shared/Typograpgy';
import BiographyForm from './BiographyForm';
import { UserOutlined, EditOutlined, FileProtectOutlined } from '@ant-design/icons';
import Button from '../../../shared/Button';

const BiographySection = () => {
    const authContext = useContext(AuthContext);
    const loadUserDetails = useLoadUserDetails();
    const  [openEditBiography, setOpenEditBiography] = useState(false);
    
    const handleBiographySave = (biography:Biography) => {
        loadUserDetails();
        setOpenEditBiography(false);
    }

    const handleBiographyClose = ()=>{
        setOpenEditBiography(false);
    }

    useEffect(() => {
        console.log(authContext?.auth.userDetails?.biography);
    }, [authContext])
    

    const BiographyHeading = styled(Text).attrs({
        strong: true
    })`
        font-size:1.2rem;
        text-align: left;
        margin-right: 10px
    `
    
    const BiographyLable = styled(Text).attrs({
        strong: true
    })`
        font-size:1rem;
        text-align: left;
        margin-right:10px;
    `
    const BiographyValue = styled(Text)`
        font-size:1rem;
        text-align: left;
        font-weight:700;
    `
    const BiographyContainer = styled.div`
        display:flex;
        flex-direction:row;
    `
    const BiographyNestedContainer = styled.div`
        margin-top:0px;
        margin-left:10px
    `

    const BiographyVerticalContainer = styled.div`
        display:flex;
        flex-direction:column;
    `
    
    return (
        <>
            <Modal
                title={'Edit Biography'}
                closable={false}
                centered={true}
                visible={openEditBiography}
                footer={null}
            >
                <BiographyForm onSave={handleBiographySave} onClose={handleBiographyClose} />
            </Modal>
            <Spin spinning={authContext?.auth.loading}>
                <Space style={{ display: "flex", justifyContent: "space-between", maxWidth:'750px' }}>
                    <Title level={4} style={{ marginBottom: '20px' }}>
                        Biography
                    </Title>
                    <Button type="primary" shape="round" icon={<EditOutlined  />}  onClick={() => setOpenEditBiography(true)}>
                        Edit
                    </Button>
                </Space>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Space direction="vertical" size='small'>
                            <BiographyHeading >
                                Basic Details <UserOutlined />
                            </BiographyHeading>
                            <BiographyContainer>
                                <BiographyLable>
                                    First Name
                                </BiographyLable>
                                <BiographyValue>
                                    {authContext?.auth.userDetails?.biography?.firstName}
                                </BiographyValue>
                            </BiographyContainer>
                            <BiographyContainer>
                                <BiographyLable>
                                    Last Name
                                </BiographyLable>
                                <BiographyValue>
                                    {authContext?.auth.userDetails?.biography?.lastName}
                                </BiographyValue>
                            </BiographyContainer>
                            <BiographyLable>
                                Current Address
                            </BiographyLable>
                            <BiographyNestedContainer>
                                <BiographyVerticalContainer>
                                    <BiographyLable>
                                        Address
                                    </BiographyLable>
                                    <BiographyValue>
                                        {authContext?.auth.userDetails?.biography?.address?.address}
                                    </BiographyValue>
                                </BiographyVerticalContainer>
                                <BiographyVerticalContainer>
                                    <BiographyLable>
                                        City
                                    </BiographyLable>
                                    <BiographyValue>
                                        {authContext?.auth.userDetails?.biography?.address?.city}
                                    </BiographyValue>
                                </BiographyVerticalContainer>
                                <BiographyVerticalContainer>
                                    <BiographyLable>
                                        Country
                                    </BiographyLable>
                                    <BiographyValue>
                                        {authContext?.auth.userDetails?.biography?.address?.country}
                                    </BiographyValue>
                                </BiographyVerticalContainer>
                                <BiographyVerticalContainer>
                                    <BiographyLable>
                                        post Code
                                    </BiographyLable>
                                    <BiographyValue>
                                        {authContext?.auth.userDetails?.biography?.address?.postCode}
                                    </BiographyValue>
                                </BiographyVerticalContainer>
                            </BiographyNestedContainer>
                        </Space>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Space direction="vertical" size='small'>
                            <BiographyHeading >
                                Occupational Details <FileProtectOutlined />
                            </BiographyHeading>
                            <BiographyContainer>
                                <BiographyLable>
                                    Current Job Role
                                </BiographyLable>
                                <BiographyValue>
                                    {authContext?.auth.userDetails?.biography?.jobRole}
                                </BiographyValue>
                            </BiographyContainer>
                            <BiographyLable>
                                Current Company
                            </BiographyLable>
                            <BiographyNestedContainer>
                                <Space direction="vertical" size='small'>

                                    <BiographyContainer>
                                        <BiographyLable>
                                            Company Name
                                        </BiographyLable>
                                        <BiographyValue>
                                            {authContext?.auth.userDetails?.biography?.company?.name}
                                        </BiographyValue>
                                    </BiographyContainer>
                                    <BiographyVerticalContainer>
                                        <BiographyLable>
                                            Company Description
                                        </BiographyLable>
                                        <BiographyValue>
                                            {authContext?.auth.userDetails?.biography?.company?.description}
                                        </BiographyValue>
                                    </BiographyVerticalContainer>
                                    <BiographyLable>
                                        Company Address
                                    </BiographyLable>
                                    <BiographyNestedContainer>
                                        <BiographyVerticalContainer>
                                            <BiographyLable>
                                                Address
                                            </BiographyLable>
                                            <BiographyValue>
                                                {authContext?.auth.userDetails?.biography?.address?.address}
                                            </BiographyValue>
                                        </BiographyVerticalContainer>
                                        <BiographyVerticalContainer>
                                            <BiographyLable>
                                                City
                                            </BiographyLable>
                                            <BiographyValue>
                                                {authContext?.auth.userDetails?.biography?.address?.city}
                                            </BiographyValue>
                                        </BiographyVerticalContainer>
                                        <BiographyVerticalContainer>
                                            <BiographyLable>
                                                Country
                                            </BiographyLable>
                                            <BiographyValue>
                                                {authContext?.auth.userDetails?.biography?.address?.country}
                                            </BiographyValue>
                                        </BiographyVerticalContainer>
                                        <BiographyVerticalContainer>
                                            <BiographyLable>
                                                post Code
                                            </BiographyLable>
                                            <BiographyValue>
                                                {authContext?.auth.userDetails?.biography?.address?.postCode}
                                            </BiographyValue>
                                        </BiographyVerticalContainer>
                                    </BiographyNestedContainer>
                                </Space>
                            </BiographyNestedContainer>
                        </Space>    
                    </Col>
                </Row>
            </Spin>
        </>
    )
}

export default BiographySection