import { Col, Row } from 'antd'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
        width: 100%;
        background-color: #4e4e4e;  
        max-width: 1400px;
        margin-inline: auto;
        margin-left: auto;
        margin-right: auto;
`

const Companies = () => {
    return (
        <Container>
            <h3>Get Hired</h3>
            <Row>
                <Col span={2}>
                    <h2>Makeless</h2>
                </Col>
                <Col span={2}>
                    <h2>Coworks</h2>
                </Col>
                <Col span={2}>
                    Greener
                </Col>
                <Col span={2}>Sassdaily</Col>
                <Col span={2}>Dorfus</Col>
                <Col span={2}>Askimat</Col>
            </Row>
        </Container>
    )
}

export default Companies