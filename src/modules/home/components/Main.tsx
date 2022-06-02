import React from 'react'
import { Col, Row, Carousel } from 'antd'

import styled from 'styled-components'

const Section = styled.div`

`

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const TitleWrapper = styled.div`
    width: 80%;

`

const Container = styled.div`
   
`

const ImageWrapper = styled.div`
    height: 100%;
`

const Image = styled.img`
    

`

const SearchBox = styled.div`
    width: 100%;
    height: 150px;
    background-color: grey;
 
`



const Main = () => {
    return (
        <Section className="container"> 
            <Row className="row">
                <Col span={12}>
                    <Container>
                        <TitleWrapper>
                            <h1> Get hired by the popular teams.</h1>
                            <h4>Creating a beautiful job website is not easy always. To make your life easier, we are introducing Justcamp template.</h4>
                        </TitleWrapper>
                        <SearchBox></SearchBox>     
                    </Container>
                </Col>
                <Col span={12}>

                    <Carousel effect="fade" autoplay={true}>
                        <ImageWrapper>
                            <Image src='https://uphiress.vercel.app/_next/static/media/hero-image-1.27981202.png' alt="car-1" />
                        </ImageWrapper>
                        <ImageWrapper>
                            <Image src='https://uphiress.vercel.app/_next/static/media/hero-image-2.d1bfb7c0.png' alt="car-2" />
                        </ImageWrapper>


                    </Carousel>
                </Col>
            </Row>


        </Section>
    )
}

export default Main