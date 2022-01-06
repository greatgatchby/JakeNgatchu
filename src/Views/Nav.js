import React from 'react'
import { Button, Navbar, Container, Nav} from 'react-bootstrap'
import logo from '../asset/logo.jpg'
import {Github, Linkedin} from "react-bootstrap-icons";
const Navigation = () => {
    return(
        <>
            <Navbar bg="dark" expand="lg" className={'justify-content-start sticky-top navbar-dark'}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand href="/"><img width='30' height='30' className={'mx-2 rounded-circle shadow-lg'} src={logo}  alt={'logo: jn in square at 90 degrees'}/>Jake Ngatchu</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/portfolio">Projects</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                        <a href={'https://www.fiverr.com/share/7WQXv1'}><Button className={'btn btn-primary px-5 me-2'}>Hire Me</Button></a>
                        <a href={'https://github.com/greatgatchby'}><Button className={'me-2'}><Github /></Button></a>
                        <a href={'https://www.linkedin.com/in/jake-ngatchu-9a7868115/'}> <Button className={'me-2'}><Linkedin /></Button></a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        )
}
export default Navigation
