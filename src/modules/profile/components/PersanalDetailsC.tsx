
import React, { useContext } from 'react'
import styled from 'styled-components';
import { AuthContext } from '../../../auth/AuthProvider';
import { Paragraph, Text } from '../../../shared/Typograpgy';


const Container = styled.div``

const DataRow = styled.div``

const DetailsLabel = styled(Text)`
    font-weight : bold;
`

const DetailsText = styled(Paragraph)``




const PersanalDetailsC = () => {
  const authContext = useContext(AuthContext);
  return (
    <Container>
      <DataRow>
        <DetailsText>{authContext?.auth.userDetails?.user?.name}</DetailsText>
      </DataRow>
    </Container>
  )
}

export default PersanalDetailsC