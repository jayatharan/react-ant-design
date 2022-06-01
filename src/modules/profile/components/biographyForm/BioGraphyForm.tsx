import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../../auth/AuthProvider'
import { Tabs } from 'antd';

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
   return (

      <div>
         <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Tabs defaultActiveKey="1" onChange={onChange}>
               <TabPane tab="User Data" key="1">
                 User Data
               </TabPane>
               <TabPane tab="Company Data" key="2">
                  Company Data
               </TabPane>
            </Tabs>
         </Modal>
         {
            userBigrapghy && <>
               <h2>Personal Details</h2>
               <div className="data-row">
                  <h3>First Name :  {userBigrapghy.firstName}</h3>
               </div>
               <div className="data-row">
                  <h3>Last Name :  {userBigrapghy.lastName}</h3>
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
               <h2>Company Details</h2>
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