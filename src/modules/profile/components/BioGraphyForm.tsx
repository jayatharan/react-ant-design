import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../auth/AuthProvider'
import { Tabs, Form, Input } from 'antd';

const BioGraphyForm = () => {
   const authContext = useContext(AuthContext);

   const userBigrapghy = authContext?.auth.userDetails?.biography;
   const [isModalVisible, setIsModalVisible] = useState(false);

   const showModal = () => {
      setIsModalVisible(true);
   };

   const handleOk = () => {
      setIsModalVisible(false);
   };

   const handleCancel = () => {
      setIsModalVisible(false);
   };

   const { TabPane } = Tabs;

   const onChange = (key: string) => {
      console.log(key);
   };

   const onFinish = (values: any) => {
      console.log('Success:', values);
      
      
   };
   return (

      <div className='bigraphy-data-container'>
         <Modal title="Update Bigrapghy Details" visible={isModalVisible}
            footer={null}
            onCancel = {handleCancel}
         >
            <Form
               onFinish={onFinish}
            >
               <Tabs defaultActiveKey="1" onChange={onChange}>
                  <TabPane tab="User Data" key="1">
                     <Form.Item
                        label="First Name"
                        name="first-name"
                        rules={[{ message: 'Please input your first name!' }]}
                        initialValue= {userBigrapghy?.firstName ? userBigrapghy?.firstName : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="Last Name"
                        name="last-name"
                        rules={[{ message: 'Please input your last name!' }]}
                        initialValue= {userBigrapghy?.lastName ? userBigrapghy?.lastName : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="Job Role"
                        name="job-role"
                        rules={[{ message: 'Please input your job role!' }]}
                        initialValue= {userBigrapghy?.jobRole ? userBigrapghy?.jobRole : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ message: 'Please input your address!' }]}
                        initialValue= {userBigrapghy?.address ? userBigrapghy?.address.address : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="City"
                        name="city"
                        rules={[{ message: 'Please Enter your city' }]}
                        initialValue= {userBigrapghy?.address ? userBigrapghy?.address.city : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="Country"
                        name="country"
                        rules={[{ message: 'Please input your country' }]}
                        initialValue= {userBigrapghy?.address ? userBigrapghy?.address.city : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="Post Code"
                        name="post-code"
                        rules={[{ message: 'Please input your  post code!' }]}
                        initialValue= {userBigrapghy?.postCode ? userBigrapghy?.postCode : ""}
                     >
                        <Input />
                     </Form.Item>
                  </TabPane>
                  <TabPane tab="Company Data" key="2">
                     <Form.Item
                        label="Name"
                        name="company-name"
                        rules={[{ message: 'Please input your company name!' }]}
                        initialValue= {userBigrapghy?.company ? userBigrapghy?.company.name : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ message: 'Please input your first name!' }]}
                        initialValue= {userBigrapghy?.company ? userBigrapghy?.company.description : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ message: 'Please input your first name!' }]}
                        initialValue= {userBigrapghy?.company ? userBigrapghy?.company.address?.address : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="City"
                        name="city"
                        rules={[{ message: 'Please input your first name!' }]}
                        initialValue= {userBigrapghy?.company ? userBigrapghy?.company.address?.city : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="Country"
                        name="country"
                        rules={[{ message: 'Please input your company s country!' }]}
                        initialValue= {userBigrapghy?.company ? userBigrapghy?.company.address?.country : ""}
                     >
                        <Input />
                     </Form.Item>
                  </TabPane>
               </Tabs>
               <Form.Item>
                  <Button type="primary" htmlType="submit">
                     UPDATE DATA
                  </Button>
               </Form.Item>
            </Form>
         </Modal>
         {
            userBigrapghy && <>
               <h2>Personal Details</h2>
               <div className="data-row">
                  <h3>First Name :  <span></span>{userBigrapghy.firstName}</h3>
               </div>
               <div className="data-row">
                  <h3>Last Name :  <span>{userBigrapghy.lastName}</span></h3>
               </div>
               <div className="data-row">
                  <h3> Address :  {userBigrapghy.address ? `${userBigrapghy.address?.address},${userBigrapghy.address?.city},${userBigrapghy.address?.country}` : "Not Available"}</h3>
               </div>
               <div className="data-row">
                  <h3> Postal Code :  {userBigrapghy.address?.postCode ? userBigrapghy.postCode : "Not Available"}</h3>
               </div>
               <div className="data-row">
                  <h3> Job Role :  {userBigrapghy.jobRole ? userBigrapghy.jobRole : "Not Available"}</h3>
               </div>
               <h2 className='company-details'>Company Details</h2>
               {
                  userBigrapghy.company ? <>
                     <h3>Company Name :  {userBigrapghy.company.name ? userBigrapghy.company.name : "Not Available"}</h3>
                     <h3>Description : {userBigrapghy.company.description ? userBigrapghy.company.description : "Not Avaialble"}</h3>
                     {userBigrapghy.company.address ?
                        <h3>
                           `${userBigrapghy.company.address.address} ${userBigrapghy.company.address.city} ${userBigrapghy.company.address.country}`
                        </h3>
                        : <h3>Not Available</h3>}
                  </> : <h3>Not Available</h3>
               }
               <Button type="primary" onClick={showModal}>Update Personal Data</Button>
            </>
         }

      </div>
   )


}

export default BioGraphyForm