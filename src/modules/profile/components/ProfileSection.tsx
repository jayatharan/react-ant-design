import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { getImagePath } from '../../../utils/ImageProcess';

import { Space, Avatar, Spin, Tabs } from 'antd';
import { Text, Title } from '../../../shared/Typograpgy';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import { AuthContext } from '../../../auth/AuthProvider';
import useLoadUserDetails from '../../../auth/LoadUserDetailsHook';
import Modal from '../../../shared/Modal';
import ProfileForm from '../components/ProfileForm';
import { User } from '../../../application/models/UserModels';


const ProfileLable = styled(Text).attrs({
    strong: true
})`
    font-size:1.1rem;
    text-align: left;
    color: 	#808080;
`
const ProfileValue = styled(Text)`
    font-size:1.01rem;
    text-align: left;
    font-weight:700
`
const ProfileContainer = styled.div`
    display:flex;
    flex-direction:column;
`

const ProfileSection = () => {
    const authContext = useContext(AuthContext);
    const loadUserDetails = useLoadUserDetails();
    const [openEditProfile, setOpenEditProfile] = useState(false);

    const handleProfileSave = (user: User) => {
        loadUserDetails();
        setOpenEditProfile(false);
    }

    const handleProfileClose = () => {
        setOpenEditProfile(false);
    }

    return (
        <>
            <Modal
                title={'Edit Profile'}
                closable={false}
                centered={true}
                visible={openEditProfile}
                footer={null}
            >
                <ProfileForm onSave={handleProfileSave} onClose={handleProfileClose} />
            </Modal>
            <Spin spinning={authContext?.auth.loading}>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop:'10px' }}>
                    <Title level={3} style={{ marginBottom: '20px' }}>
                        PROFILE <EditOutlined onClick={() => setOpenEditProfile(true)} />
                    </Title>
                    <Space direction="vertical" size='middle'>
                        <div style={{ textAlign: 'center' }}>
                            <Avatar
                                shape="square" 
                                size={170}
                                icon={authContext?.auth.userDetails?.user?.image ? (
                                    <img src={`${getImagePath(authContext?.auth.userDetails?.user?.image)}`} />
                                ) : (
                                    <UserOutlined />
                                )}
                            />
                        </div>
                        <ProfileContainer>
                            <ProfileLable>
                                Username
                            </ProfileLable>
                            <ProfileValue>
                                {authContext?.auth.userDetails?.user?.name}
                            </ProfileValue>
                        </ProfileContainer>
                        <ProfileContainer>
                            <ProfileLable>
                                Email
                            </ProfileLable>
                            <ProfileValue>
                                {authContext?.auth.userDetails?.user?.email}
                            </ProfileValue>
                        </ProfileContainer>
                        <ProfileContainer>
                            <ProfileLable>
                                Mobile No
                            </ProfileLable>
                            <ProfileValue>
                                {authContext?.auth.userDetails?.user?.mobileNumber}
                            </ProfileValue>
                        </ProfileContainer>
                        <ProfileContainer>
                            <ProfileLable>
                                Alternative Email
                            </ProfileLable>
                            <ProfileValue>
                                {authContext?.auth.userDetails?.user?.alternativeEmail}
                            </ProfileValue>
                        </ProfileContainer>
                    </Space>
                </div>
            </Spin>
        </>
    )
}

export default ProfileSection