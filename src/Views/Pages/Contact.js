import React from "react"
import {Button, Row, Col, Card, Form, Container} from 'react-bootstrap'

const Contact = () => {
    return (
        <>
            <Container className={'pt-5'}>
                <Row className="d-flex  justify-content-center text-start">
                    <Col md={6}>
                        <Card className={'p-4'}>
                            <Form action={'mailto:jngatchu@gmail.com'} method={'GET'}>
                                <Form.Group>
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                    <Form.Control/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Subject
                                    </Form.Label>
                                    <Form.Control />
                                </Form.Group>
                                <Form.Group className={'mb-4'}>
                                    <Form.Label>
                                        Message
                                    </Form.Label>
                                    <Form.Control as={'textarea'} rows={10} />
                                </Form.Group>
                                <Button type={'submit'}>Send</Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Contact
