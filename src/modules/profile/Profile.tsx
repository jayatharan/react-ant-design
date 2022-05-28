import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FILE_ROUTE } from '../../application/constants/AppRoutes';

import {Row, Col, Space, Avatar, Spin} from 'antd';
import { Text, Title } from '../../shared/Typograpgy';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import { AuthContext } from '../../auth/AuthProvider';
import useLoadUserDetails from '../../auth/LoadUserDetailsHook';
import Modal from '../../shared/Modal';
import ProfileForm from './components/ProfileForm';
import { User } from '../../application/models/UserModels';

const ProfileLable = styled(Text).attrs({
  strong:true
})`
  font-size:1.1rem;
  text-align: center;
`
const ProfileValue = styled(Text)`
  text-align: center;
`
const ProfileContainer = styled.div`
  display:flex;
  flex-direction:column;
`

const Profile = () => {
  const authContext = useContext(AuthContext);
  const loadUserDetails = useLoadUserDetails();
  const [openEditProfile, setOpenEditProfile] = useState(false);


  const handleProfileSave = (user:User) => {
    loadUserDetails();
    setOpenEditProfile(false);
  }

  const handleProfileClose =  () => {
    setOpenEditProfile(false);
  }

  return (
    <Row style={{maxWidth:'1400px', marginInline:'auto'}}>
      <Modal
        title={'Edit Profile'}
        closable={false}
        centered={true}
        visible={openEditProfile}
        footer={null}
      >
        <ProfileForm onSave={handleProfileSave} onClose={handleProfileClose} />
      </Modal>
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <Spin spinning={authContext?.auth.loading}>
          <div style={{width:'100%', display:'flex', alignItems:'center', flexDirection:'column'}}>
            <Title level={3} style={{marginBottom:'20px'}}>
              PROFILE <EditOutlined onClick={()=>setOpenEditProfile(true)} />
            </Title>
            <Space direction="vertical" size='middle'>
              <div style={{textAlign:'center'}}>
                <Avatar 
                  size={80} 
                  icon={authContext?.auth.userDetails?.user.image?(
                    <img src={`${process.env.REACT_APP_API_BASE_URL}/${authContext?.auth.userDetails?.user.image}`} />
                  ):(
                    <UserOutlined />
                  )}
                />
              </div>
              <ProfileContainer>
                  <ProfileLable>
                    Username
                  </ProfileLable>
                  <ProfileValue>
                    {authContext?.auth.userDetails?.user.name}
                  </ProfileValue>
              </ProfileContainer>
              <ProfileContainer>
                <ProfileLable>
                  Email
                </ProfileLable>
                <ProfileValue>
                  {authContext?.auth.userDetails?.user.email}
                </ProfileValue>
              </ProfileContainer>
              <ProfileContainer>
                <ProfileLable>
                  Mobile No
                </ProfileLable>
                <ProfileValue>
                  {authContext?.auth.userDetails?.user.mobileNumber}
                </ProfileValue>
              </ProfileContainer>
              <ProfileContainer>
                <ProfileLable>
                  Alternative Email
                </ProfileLable>
                <ProfileValue>
                  {authContext?.auth.userDetails?.user.alternativeEmail}
                </ProfileValue>
              </ProfileContainer>
            </Space>
          </div>
        </Spin>       
      </Col>
      <Col xs={24} sm={24} md={16} lg={16} xl={16}>
        Form
      </Col>
    </Row>
  )
}

export default Profile