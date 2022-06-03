import { Button, Divider } from 'antd';

import React, { useContext } from 'react'
import { AuthContext } from '../../../auth/AuthProvider'

import styled from 'styled-components';




const Container = styled.div`
    display:flex;
    flex-direction: column;
    width : 60%;

`

const Subtitle = styled.div`
    font-weight:bold;
    font-size : 0.8rem;
`


const DataRow = styled.div`
    display : flex;
    flex-direction: row;
`

const DataColumn = styled.div`
    flex : 1;
`

const Data = styled.span`
    color : #85837e;
    p{
        color : #1f2324;
        font-weight: bold;
        letter-spacing : 0.2px;
    }
`

const Devider = styled(Divider)`
    margin : 10px 0px;
    background-color: #008686;
`


const BiographySection = () => {
    const authContext = useContext(AuthContext);

    return (

        <Container >
            {
                authContext?.auth.userDetails?.biography && <>
                    <Subtitle>
                        Personal Details
                    </Subtitle>
                    <Devider />
                    <DataRow>
                        <DataColumn>
                            <Data>First Name</Data>
                        </DataColumn>
                        <DataColumn>
                            <Data><p>{authContext?.auth.userDetails?.biography?.firstName}</p></Data>
                        </DataColumn>
                    </DataRow>
                    <DataRow>
                        <DataColumn>
                            <Data>Last Name</Data>
                        </DataColumn>
                        <DataColumn>
                            <Data><p>{authContext?.auth.userDetails?.biography?.lastName}</p></Data>
                        </DataColumn>
                    </DataRow>

                    <DataRow>
                        <DataColumn>
                            <Data>Job Role</Data>
                        </DataColumn>
                        <DataColumn>
                            <Data><p>{authContext?.auth.userDetails?.biography?.jobRole}</p></Data>
                        </DataColumn>
                    </DataRow>
                    <Subtitle>
                        Contact Information
                    </Subtitle>
                    <Devider />
                    <DataRow>
                        <DataColumn>
                            <Data>Address</Data>
                        </DataColumn>
                        <DataColumn>
                            <Data><p>{authContext?.auth.userDetails?.biography?.address?.address}</p></Data>
                        </DataColumn>
                    </DataRow>
                    <DataRow>
                        <DataColumn>
                            <Data>City</Data>
                        </DataColumn>
                        <DataColumn>
                            <Data><p>{authContext?.auth.userDetails?.biography?.address?.city}</p></Data>
                        </DataColumn>
                    </DataRow>
                    <DataRow>
                        <DataColumn>
                            <Data>Postal Code</Data>
                        </DataColumn>
                        <DataColumn>
                            <Data><p>{authContext?.auth.userDetails?.biography?.address?.postCode}</p></Data>
                        </DataColumn>
                    </DataRow>
                    <DataRow>
                        <DataColumn>
                            <Data>Country</Data>
                        </DataColumn>
                        <DataColumn>
                            <Data><p>{authContext?.auth.userDetails?.biography?.address?.country}</p></Data>
                        </DataColumn>
                    </DataRow>
                    <Subtitle>
                        Company Information
                    </Subtitle>
                    <Devider />
                    <DataRow>
                        <DataColumn>
                            <Data>Name</Data>
                        </DataColumn>
                        <DataColumn>
                            <Data><p>{authContext?.auth.userDetails?.biography?.company?.name}</p></Data>
                        </DataColumn>
                    </DataRow>
                    <DataRow>
                        <DataColumn>
                            <Data>About</Data>
                        </DataColumn>
                        <DataColumn>
                            <Data><p>{authContext?.auth.userDetails?.biography?.company?.description}</p></Data>
                        </DataColumn>
                    </DataRow>
                    <DataRow>
                        <DataColumn>
                            <Data>Address</Data>
                        </DataColumn>
                        <DataColumn>
                            <Data><p>{authContext?.auth.userDetails?.biography?.company?.address?.address}</p></Data>
                        </DataColumn>
                    </DataRow>
                    <DataRow>
                        <DataColumn>
                            <Data>Location</Data>
                        </DataColumn>
                        <DataColumn>
                            <Data><p>{authContext?.auth.userDetails?.biography?.company?.address?.city},{authContext?.auth.userDetails?.biography?.company?.address?.country}</p></Data>
                        </DataColumn>
                    </DataRow>
                    <Button type="primary">Update Personal Data</Button>
                </>
            }
        </Container>

    )
}

export default BiographySection