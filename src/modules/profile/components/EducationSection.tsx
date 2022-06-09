import React, {useContext, useEffect, useState} from 'react'
import { Educational } from '../../../application/models/EducationModels'
import styled from 'styled-components';
import UserApi from '../../../api/UserApi';
import { getImagePath } from '../../../utils/ImageProcess';
import moment from "moment";
import { DATE_FORMAT } from '../../../application/constants/AppConstants';

import { Space, Spin, Row, Col, Card, Avatar } from 'antd';
import Modal from '../../../shared/Modal';
import { Title, Text } from '../../../shared/Typograpgy';
import EducationForm from './EducationForm';
import Button from '../../../shared/Button';
import { AuthContext } from '../../../auth/AuthProvider';
import { UserOutlined, EditOutlined, FileProtectOutlined, BookOutlined } from '@ant-design/icons';

const EducationContainer = styled.div`
    margin-top:5px;
    margin-bottom:8px;
    margin-right:5px;
    padding:5px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`
const EducationFieldContainer = styled.div`
    display:flex;
    flex-direction:row;
`

const EducationFieldVerticalContainer = styled.div`
    display:flex;
    flex-direction:column;
`

const EducationLable = styled(Text).attrs({
    strong: true
})`
    font-size:0.8rem;
    text-align: left;
    margin-right:10px;
    color: 	#707070;
`

const BiographyValue = styled(Text)`
    font-size:0.8rem;
    text-align: left;
    font-weight:700;
`
const ProfileEditButton = styled(EditOutlined)`
    position: absolute;
    right:20px;
    color:green;
    font-size:1.1rem;
    z-index:9999;
`

const EducationSection = () => {
    const authContext = useContext(AuthContext);
    const [openEducationalModal, setOpenEducationalModal] = useState(false);
    const [educationalDetails, setEducationalDetails] = useState<Educational[]>([])
    const [loading, setLoading] = useState(false);
    const [selectedEducation, setSelectedEducation] = useState<Educational | null>(null);

    const getUserEducationalDetails = ()=>{
        setLoading(true)
        UserApi.getUserEducationDetail()
        .then((response)=>{
            console.log(response);
            setEducationalDetails(response);
            setLoading(false);
        }).catch((error)=>{
            setLoading(false);
            console.log(error);
        })
    }

    const handleEditEducationalDetail = (educationalDetail:Educational)=>{
        setSelectedEducation(educationalDetail);
        setOpenEducationalModal(true);
    }

    const handleEducationalModelClose = ()=>{
        setOpenEducationalModal(false);
        setSelectedEducation(null);
    }

    useEffect(()=>{
        getUserEducationalDetails();
    },[authContext])

    return (
        <>
            <Modal
                title={'Educational Details'}
                closable={false}
                centered={true}
                visible={openEducationalModal}
                footer={null}
            >
                <EducationForm onClose={handleEducationalModelClose} selectedEducationalDetail={selectedEducation} />
            </Modal>
            <Spin spinning={loading}>
                <Space style={{ display: "flex", justifyContent: "space-between", alignItems:'center', marginBottom:"20px", maxWidth:'900px'}}>
                    <Title level={4}>
                        Education Details
                    </Title>
                    <Button type="primary" shape="round" icon={<EditOutlined  />}  onClick={() => setOpenEducationalModal(true)} >
                        Add New
                    </Button>
                </Space>
                <Row style={{maxWidth:'900px'}}>
                    {educationalDetails.map((e)=>(
                        <Col key={e.id} xs={24} sm={24} md={24} lg={24} xl={24}>
                            <EducationContainer>
                                <ProfileEditButton onClick={()=>handleEditEducationalDetail(e)} />
                                <Row>
                                    <Col xs={6} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                        <Avatar 
                                            shape="square" 
                                            size={120}
                                            icon={e.image?(<img src={`${getImagePath(e.image)}`}/>):(<BookOutlined />)}
                                        />
                                    </Col>
                                    <Col xs={9}>
                                        <EducationFieldVerticalContainer>
                                            <EducationLable>
                                                Course Title
                                            </EducationLable>
                                            <BiographyValue>
                                                {e.courseName}
                                            </BiographyValue>
                                        </EducationFieldVerticalContainer>
                                        <EducationFieldContainer>
                                            <EducationLable>
                                                Course Type
                                            </EducationLable>
                                            <BiographyValue>
                                                {e.type}
                                            </BiographyValue>
                                        </EducationFieldContainer>
                                        <EducationFieldContainer>
                                            <EducationLable>
                                                Started Date
                                            </EducationLable>
                                            <BiographyValue>
                                                {moment(e.startDate).format(DATE_FORMAT)}
                                            </BiographyValue>
                                        </EducationFieldContainer>
                                        <EducationFieldContainer>
                                            <EducationLable>
                                                Completed Date
                                            </EducationLable>
                                            <BiographyValue>
                                                {moment(e.endDate).format(DATE_FORMAT)}
                                            </BiographyValue>
                                        </EducationFieldContainer>
                                        <EducationFieldVerticalContainer>
                                            <EducationLable>
                                                Course Description
                                            </EducationLable>
                                            <BiographyValue>
                                                {e.description}
                                            </BiographyValue>
                                        </EducationFieldVerticalContainer>
                                    </Col>
                                    <Col xs={9}>
                                        <EducationFieldVerticalContainer>
                                            <EducationLable>
                                                Organization Name
                                            </EducationLable>
                                            <BiographyValue>
                                                {e.organizationName}
                                            </BiographyValue>
                                        </EducationFieldVerticalContainer>
                                        <EducationFieldVerticalContainer>
                                            <EducationLable>
                                                Organization Address
                                            </EducationLable>
                                            <BiographyValue>
                                                {e.address?.address},<br/>
                                                {e.address?.city},<br/>
                                                {e.address?.country}.<br/>
                                                {e.address?.postCode}.
                                            </BiographyValue>
                                        </EducationFieldVerticalContainer>
                                    </Col>
                                </Row>
                            </EducationContainer>
                        </Col>
                    ))}
                </Row>
            </Spin>
        </>
    )
}

export default EducationSection