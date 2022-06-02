import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../auth/AuthProvider'
import { Tabs, Form, Input } from 'antd';
import styled from 'styled-components';
import { Paragraph, Text } from '../../../shared/Typograpgy';



const Container = styled.div``

const DataRow = styled.div``

const DetailsLabel = styled(Text)`
    font-weight : bold;
`

const DetailsText = styled(Paragraph)``

const SubTitle = styled.h2`
    


`

const BiographySection = () => {
    const authContext = useContext(AuthContext);

    return (

        <Container >
            {
                authContext?.auth.userDetails?.biography && <>
                    <SubTitle>Personal Details</SubTitle>
                    <DataRow>
                        <DetailsLabel>First Name </DetailsLabel>
                        <DetailsText>{authContext?.auth.userDetails?.biography.firstName}</DetailsText>
                    </DataRow>
                    <DataRow >
                        <DetailsLabel>Last Name</DetailsLabel>
                        <DetailsText>{authContext?.auth.userDetails?.biography.lastName}</DetailsText>
                    </DataRow>
                    <DataRow >
                        <DetailsLabel> Address</DetailsLabel>
                        <DetailsText> {authContext?.auth.userDetails?.biography.address ? `${authContext?.auth.userDetails?.biography.address?.address},\n${authContext?.auth.userDetails?.biography.address?.city},\n${authContext?.auth.userDetails?.biography.address?.country}` : "Not Available"}</DetailsText>
                    </DataRow>
                    <DataRow >
                        <DetailsLabel> Postal Code   </DetailsLabel>
                        <DetailsText>{authContext?.auth.userDetails?.biography.address?.postCode ? authContext?.auth.userDetails?.biography.postCode : "Not Available"}</DetailsText>
                    </DataRow>
                    <DataRow >
                        <DetailsLabel> Job Role  </DetailsLabel>
                        <DetailsText>{authContext?.auth.userDetails?.biography.jobRole ? authContext?.auth.userDetails?.biography.jobRole : "Not Available"}</DetailsText>
                    </DataRow>
                    <SubTitle >Company Details</SubTitle>
                    {
                        authContext?.auth.userDetails?.biography.company ? <>
                            <DetailsLabel>Company Name </DetailsLabel>
                            <DetailsText> {authContext?.auth.userDetails?.biography.company.name ? authContext?.auth.userDetails?.biography.company.name : "Not Available"}</DetailsText>
                            <DetailsLabel>Description </DetailsLabel>
                            <DetailsText>{authContext?.auth.userDetails?.biography.company.description ? authContext?.auth.userDetails?.biography.company.description : "Not Avaialble"}</DetailsText>
                            {authContext?.auth.userDetails?.biography.company.address ?
                                <DetailsLabel>
                                    `${authContext?.auth.userDetails?.biography.company.address.address},\n${authContext?.auth.userDetails?.biography.company.address.city},\n${authContext?.auth.userDetails?.biography.company.address.country}`
                                </DetailsLabel>
                                : <DetailsText>Not Available</DetailsText>}
                        </> : <DetailsLabel>Not Available</DetailsLabel>
                    }
                    <br/>
                    <Button type="primary">Update Personal Data</Button>
                </>
            }
        </Container>

    )
}

export default BiographySection