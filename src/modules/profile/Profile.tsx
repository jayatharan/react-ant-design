import React, { useContext } from "react";

import { Row, Col, Space, Avatar, Spin, Tabs } from "antd";
import {
  UserOutlined,
  ProjectOutlined,
  FileProtectOutlined,
  BookOutlined,
} from "@ant-design/icons";
import ProfileSection from "./components/ProfileSection";
import BiographySection from "./components/BiographySection";
import { AuthContext } from "../../auth/AuthProvider";
import EducationForm from "./components/EducationForm";
import EducationSection from "./components/EducationSection";

const { TabPane } = Tabs;

const Profile = () => {
  const authContext = useContext(AuthContext);

  return (
    <Row style={{ maxWidth: "1400px", marginInline: "auto" }}>
      <Col xs={24} sm={24} md={6} lg={6} xl={6}>
        <ProfileSection />
      </Col>
      <Col xs={24} sm={24} md={18} lg={18} xl={18}>
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
            <BiographySection />
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
            <EducationSection />
            {/* <EducationForm /> */}
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
  );
};

export default Profile;
