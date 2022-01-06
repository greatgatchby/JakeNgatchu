import React from 'react'
import {Col, Container, Row, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <Container fluid height={100+'vh'} className={'bg-change pt-10vh'}>
            <Row className={'vertical-center d-flex justify-content-center text-start'}>
                <Col md={6} className={'align-self-center'}>
                    <h1>
                        Hi 👋, my name is Jake Ngatchu. I like web develeopment and blockchain technologies. I am a
                        Business Management and Computer Science student at Keele University and I am currently in my
                        third year at Keele University. 🎓
                    </h1>
                    <Link to={'/portfolio'}>
                        <Button className={'me-2 mb-2'}>Take a look at my projects</Button>
                    </Link>
                    <a href={'https://github.com/greatgatchby'} target={'blank'}>
                        <Button className={'btn-secondary mb-2'}>View My github</Button>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
