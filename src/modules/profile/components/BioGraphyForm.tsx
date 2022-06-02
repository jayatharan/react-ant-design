import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../auth/AuthProvider'
import { Tabs, Form, Input } from 'antd';

const BioGraphyForm = () => {
   const authContext = useContext(AuthContext);

  
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
                        initialValue= {authContext?.auth.userDetails?.biography?.firstName ? authContext?.auth.userDetails?.biography?.firstName : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="Last Name"
                        name="last-name"
                        rules={[{ message: 'Please input your last name!' }]}
                        initialValue= {authContext?.auth.userDetails?.biography?.lastName ? authContext?.auth.userDetails?.biography?.lastName : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="Job Role"
                        name="job-role"
                        rules={[{ message: 'Please input your job role!' }]}
                        initialValue= {authContext?.auth.userDetails?.biography?.jobRole ? authContext?.auth.userDetails?.biography?.jobRole : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ message: 'Please input your address!' }]}
                        initialValue= {authContext?.auth.userDetails?.biography?.address ? authContext?.auth.userDetails?.biography?.address.address : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="City"
                        name="city"
                        rules={[{ message: 'Please Enter your city' }]}
                        initialValue= {authContext?.auth.userDetails?.biography?.address ? authContext?.auth.userDetails?.biography?.address.city : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="Country"
                        name="country"
                        rules={[{ message: 'Please input your country' }]}
                        initialValue= {authContext?.auth.userDetails?.biography?.address ? authContext?.auth.userDetails?.biography?.address.city : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="Post Code"
                        name="post-code"
                        rules={[{ message: 'Please input your  post code!' }]}
                        initialValue= {authContext?.auth.userDetails?.biography?.postCode ? authContext?.auth.userDetails?.biography?.postCode : ""}
                     >
                        <Input />
                     </Form.Item>
                  </TabPane>
                  <TabPane tab="Company Data" key="2">
                     <Form.Item
                        label="Name"
                        name="company-name"
                        rules={[{ message: 'Please input your company name!' }]}
                        initialValue= {authContext?.auth.userDetails?.biography?.company ? authContext?.auth.userDetails?.biography?.company.name : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ message: 'Please input your first name!' }]}
                        initialValue= {authContext?.auth.userDetails?.biography?.company ? authContext?.auth.userDetails?.biography?.company.description : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ message: 'Please input your first name!' }]}
                        initialValue= {authContext?.auth.userDetails?.biography?.company ? authContext?.auth.userDetails?.biography?.company.address?.address : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="City"
                        name="city"
                        rules={[{ message: 'Please input your first name!' }]}
                        initialValue= {authContext?.auth.userDetails?.biography?.company ? authContext?.auth.userDetails?.biography?.company.address?.city : ""}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        label="Country"
                        name="country"
                        rules={[{ message: 'Please input your company s country!' }]}
                        initialValue= {authContext?.auth.userDetails?.biography?.company ? authContext?.auth.userDetails?.biography?.company.address?.country : ""}
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
            authContext?.auth.userDetails?.biography && <>
               <h2>Personal Details</h2>
               <div >
                  <h3>First Name </h3>
                  <p>{authContext?.auth.userDetails?.biography.firstName}</p>
               </div>
               <div >
                  <h3>Last Name</h3>
                  <p>{authContext?.auth.userDetails?.biography.lastName}</p>
               </div>
               <div >
                  <h3> Address</h3>
                  <p> {authContext?.auth.userDetails?.biography.address ? `${authContext?.auth.userDetails?.biography.address?.address},${authContext?.auth.userDetails?.biography.address?.city},${authContext?.auth.userDetails?.biography.address?.country}` : "Not Available"}</p>
               </div>
               <div >
                  <h3> Postal Code   </h3>
                  <p>{authContext?.auth.userDetails?.biography.address?.postCode ? authContext?.auth.userDetails?.biography.postCode : "Not Available"}</p>
               </div>
               <div >
                  <h3> Job Role  </h3>
                  <p>{authContext?.auth.userDetails?.biography.jobRole ? authContext?.auth.userDetails?.biography.jobRole : "Not Available"}</p>
               </div>
               <h2 >Company Details</h2>
               {
                  authContext?.auth.userDetails?.biography.company ? <>
                     <h3>Company Name </h3>
                     <p> {authContext?.auth.userDetails?.biography.company.name ? authContext?.auth.userDetails?.biography.company.name : "Not Available"}</p>
                     <h3>Description </h3>
                     <p>{authContext?.auth.userDetails?.biography.company.description ? authContext?.auth.userDetails?.biography.company.description : "Not Avaialble"}</p>
                     {authContext?.auth.userDetails?.biography.company.address ?
                        <h3>
                           `${authContext?.auth.userDetails?.biography.company.address.address} ${authContext?.auth.userDetails?.biography.company.address.city} ${authContext?.auth.userDetails?.biography.company.address.country}`
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