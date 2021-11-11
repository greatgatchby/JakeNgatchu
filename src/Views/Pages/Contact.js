import React from "react"
import {Button, Row, Col, Card, Form, Container} from 'react-bootstrap'

const Contact = () => {
    return (
        <>
            <Container className={'pt-5'}>
                <Row className="d-flex  justify-content-center text-start">
                    <Col md={6}>
                        <Card className={'p-4'}>
                            <Form name={'contact'} data-netlify="true">
                                <Form.Group>
                                    <Form.Label>
                                        Name
                                    </Form.Label>
                                    <Form.Control name={'email'}/>
                                </Form.Group><Form.Group>
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                    <Form.Control name={'email'}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Subject
                                    </Form.Label>
                                    <Form.Control name={'subject'}/>
                                </Form.Group>
                                <Form.Group className={'mb-4'}>
                                    <Form.Label>
                                        Message
                                    </Form.Label>
                                    <Form.Control name={'message'} as={'textarea'} rows={10} />
                                </Form.Group>
                                <input type="hidden" name="form-name" value="contact" />
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
