import React from 'react'
import styled from 'styled-components'
import Companies from './components/Companies'
import Main from './components/Main'

const HomeContainer = styled.div`
  
`

const Home = () => {
  return (
    <HomeContainer>
        <Main/>
        <Companies/>
    </HomeContainer>
  )
}

export default Home