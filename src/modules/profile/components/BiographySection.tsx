import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../auth/AuthProvider'
import { Tabs, Form, Input } from 'antd';
import styled from 'styled-components';
import { Paragraph, Text } from '../../../shared/Typograpgy';



const Container = styled.div``

const DataRow = styled.div``

const H3 = styled(Text)`
    font-weight : bold;
`

const P = styled(Paragraph)``

const SubTitle = styled.h2`
    


`

const BiographySection = () => {
    const authContext = useContext(AuthContext);

    return (

        <Container>
            {
                authContext?.auth.userDetails?.biography && <>
                    <SubTitle>Personal Details</SubTitle>
                    <DataRow>
                        <H3>First Name </H3>
                        <P>{authContext?.auth.userDetails?.biography.firstName}</P>
                    </DataRow>
                    <DataRow >
                        <H3>Last Name</H3>
                        <P>{authContext?.auth.userDetails?.biography.lastName}</P>
                    </DataRow>
                    <DataRow >
                        <H3> Address</H3>
                        <P> {authContext?.auth.userDetails?.biography.address ? `${authContext?.auth.userDetails?.biography.address?.address},\n${authContext?.auth.userDetails?.biography.address?.city},\n${authContext?.auth.userDetails?.biography.address?.country}` : "Not Available"}</P>
                    </DataRow>
                    <DataRow >
                        <H3> Postal Code   </H3>
                        <P>{authContext?.auth.userDetails?.biography.address?.postCode ? authContext?.auth.userDetails?.biography.postCode : "Not Available"}</P>
                    </DataRow>
                    <DataRow >
                        <H3> Job Role  </H3>
                        <P>{authContext?.auth.userDetails?.biography.jobRole ? authContext?.auth.userDetails?.biography.jobRole : "Not Available"}</P>
                    </DataRow>
                    <SubTitle >Company Details</SubTitle>
                    {
                        authContext?.auth.userDetails?.biography.company ? <>
                            <H3>Company Name </H3>
                            <P> {authContext?.auth.userDetails?.biography.company.name ? authContext?.auth.userDetails?.biography.company.name : "Not Available"}</P>
                            <H3>Description </H3>
                            <P>{authContext?.auth.userDetails?.biography.company.description ? authContext?.auth.userDetails?.biography.company.description : "Not Avaialble"}</P>
                            {authContext?.auth.userDetails?.biography.company.address ?
                                <H3>
                                    `${authContext?.auth.userDetails?.biography.company.address.address},\n${authContext?.auth.userDetails?.biography.company.address.city},\n${authContext?.auth.userDetails?.biography.company.address.country}`
                                </H3>
                                : <P>Not Available</P>}
                        </> : <H3>Not Available</H3>
                    }
                    <br/>
                    <Button type="primary">Update Personal Data</Button>
                </>
            }
        </Container>

    )
}

export default BiographySection