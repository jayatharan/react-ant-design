import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FILE_ROUTE } from '../../application/constants/AppRoutes';
import { getImagePath } from '../../utils/ImageProcess';

import { Row, Col, Space, Avatar, Spin, Tabs } from 'antd';
import { Text, Title } from '../../shared/Typograpgy';
import { UserOutlined, EditOutlined, ProjectOutlined, FileProtectOutlined, BookOutlined } from '@ant-design/icons';
import { AuthContext } from '../../auth/AuthProvider';
import useLoadUserDetails from '../../auth/LoadUserDetailsHook';
import Modal from '../../shared/Modal';
import ProfileForm from './components/ProfileForm';
import { User } from '../../application/models/UserModels';
import BioGraphyForm from './components/biographyForm/BioGraphyForm';

const { TabPane } = Tabs;

const ProfileLable = styled(Text).attrs({
  strong: true
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


  const handleProfileSave = (user: User) => {
    loadUserDetails();
    setOpenEditProfile(false);
  }

  const handleProfileClose = () => {
    setOpenEditProfile(false);
  }

  return (
    <Row style={{ maxWidth: '1400px', marginInline: 'auto' }}>
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
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Title level={3} style={{ marginBottom: '20px' }}>
              PROFILE <EditOutlined onClick={() => setOpenEditProfile(true)} />
            </Title>
            <Space direction="vertical" size='middle'>
              <div style={{ textAlign: 'center' }}>
                <Avatar
                  size={100}
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
      </Col>
      <Col xs={24} sm={24} md={16} lg={16} xl={16}>
        <Tabs >
          <TabPane
            tab={
              <span>
                <UserOutlined />
                Biography
              </span>
            }
            key="1"
          >
             <BioGraphyForm/>
          </TabPane>
          <TabPane
            tab={
              <span>
                <ProjectOutlined />
                Projects
              </span>
            }
            key="2"
          >
            Tab 2
          </TabPane>
          <TabPane
            tab={
              <span>
                <BookOutlined />
                Education
              </span>
            }
            key="3"
          >
            Tab 2
          </TabPane>
          <TabPane
            tab={
              <span>
                <FileProtectOutlined />
                Professional
              </span>
            }
            key="4"
          >
            Tab 2
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  )
}

export default Profile