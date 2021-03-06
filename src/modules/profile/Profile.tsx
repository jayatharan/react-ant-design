import React, { useContext } from 'react';

import { Row, Col, Space, Avatar, Spin, Tabs } from 'antd';
import { UserOutlined, ProjectOutlined, FileProtectOutlined, BookOutlined } from '@ant-design/icons';
import ProfileSection from './components/ProfileSection';
import { AuthContext } from '../../auth/AuthProvider';

const { TabPane } = Tabs;

const Profile = () => {
  const authContext = useContext(AuthContext);

  return (
    <Row style={{ maxWidth: '1400px', marginInline: 'auto' }}>
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <ProfileSection />
      </Col>
      <Col xs={24} sm={24} md={16} lg={16} xl={16}>
        <Tabs>
          <TabPane
            tab={
              <span>
                <UserOutlined />
                Biography
              </span>
            }
            key="1"
          >
            FirstName: {authContext?.auth.userDetails?.biography?.firstName}
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