import React from 'react'
import { Col, Row } from 'antd'

import styled from 'styled-components'

const Section = styled.section`

`


const Container = styled.div``


const Main = () => {
    return (
        <Section>

            <Row className = "row">
                <Col span={12}>
                    <div>
                        <h1> Get hired by the popular teams.</h1>
                        <h4>Creating a beautiful job website is not easy always. To make your life easier, we are introducing Justcamp template.</h4>
                    </div>
                </Col>
                <Col span={12}>2 of 2</Col>
            </Row>
           

        </Section>
    )
}

export default Main