import React from 'react'
import {Col, Card, Row, Container} from "react-bootstrap";
import bg1 from '../../asset/3340487.jpg'
import bg2 from '../../asset/4880390.jpg'
const Services = () => {
    return (
        <>
            <Container fluid>
                <Row xs={1}  sm={2} className={'pt-5 d-flex justify-content-center'}>
                    <Col>
                        <Card className={'overflow-hidden border-0'}>
                            <Card.Img width={'auto'} src={'https://image.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg'} className={'p-0 m-0 overflow-hidden'}/>
                            <Card.ImgOverlay className={'p-0 m-0 text-light text-center'}>
                                    <h1>Web development</h1>
                                <b><a href={'#'}>Learn More</a></b>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className={'border-0 overflow-hidden'} height={400 + 'px'} width={'auto'}>
                            <Card.Img src={'https://image.freepik.com/free-vector/antigravity-technology_52683-6034.jpg'} />
                            <Card.ImgOverlay className={'p-0 m-0 text-light'}>
                                <h1>Digital Marketing</h1>
                                <a href={'#'}><b>Message me</b></a>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Services
