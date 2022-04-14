import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import bg1 from "../../asset/skeendeep_website_mockup.png";
import bg2 from "../../asset/1.png"
import bg3 from "../../asset/talaria-landing-page.png"
//import bg4 from "../../asset/BIGdomain.png"
import bg5 from "../../asset/EHR.png"
import {Link} from "react-router-dom";

const Portfolio = () => {
    return (
        <>
            <Container fluid>
                <div className={'text-center mt-3'}>
                    <h1>Here are some of my projects. 💻</h1>
                </div>
                <Row xs={1} sm={2} md={2} lg={3} className={'p-5 g-4 d-flex justify-content-center card-deck'}>
                    <Col>
                        <Card className={'overflow-hidden p-0 border-0 bg-skeendeep-overlay'}>
                            <Card.Img src={bg1}/>
                            <Card.ImgOverlay className={'text-light hide text-start'} height={100 + '%'}>
                                <h4>Skeendeep Medical Aesthetics</h4>
                                <p>Skeendeep Medical Aesthetics is a health and dermatology brand that provides expert
                                    consultation and dermatological procedures to the POC market.
                                    <br/>
                                    <br/>
                                    I worked closely with the brand to provide a new website as well as a digital
                                    marketing and content strategy complete with social media management.
                                </p>
                                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                                <a href={'https://skeendeep.co.uk'} className={'stretched-link'}/>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className={'overflow-hidden p-0 border-0 bg-icl-overlay'}>
                            <Card.Img width={'auto'} src={bg2}/>
                            <Card.ImgOverlay className={'text-light hide text-start'} height={100 + '%'}>
                                <h4>Ice Cold Lemon</h4>
                                <p2>Ice Cold Lemon is a Luxury consignment store that specialises in the collection,
                                    consignment and sale of goods on the luxury after market.
                                    <br/>
                                    <br/>
                                    During this project I devised the business mission vision and strategies and oversaw
                                    the entire project as the Managing Director.
                                </p2>
                            </Card.ImgOverlay>
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <a href={'https://www.icecoldlemon.com'} className={'stretched-link'} />
                        </Card>
                    </Col>
                    <Col>
                        <Link to={'https://talaria.netlify.app'}>
                            <Card className={'overflow-auto p-0 border-0 bg-talaria-overlay'}>
                                <Card.Img src={bg3}/>
                                <Card.ImgOverlay className={'text-light hide text-start'} height={100 + '%'}>
                                    <h4>Talaria Consignment System</h4>
                                    <p>The Talaria Consignment System is built to provide small consignment stores a
                                        means of competing with larger more established brands such as goat and stockX.
                                        <br/>
                                        <br/>
                                        Working with a small team of developers a front-end application and back-end API
                                        were produced
                                    </p>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                                    <a href={'https://talaria.io'} className={'stretched-link'}/>
                                </Card.ImgOverlay>
                            </Card>
                        </Link>
                    </Col>
                    {/*<Col>
                        <Link to={'/comingsoon'}>
                            <Card className={'overflow-auto p-0 border-0 bg-bigdomain-overlay'}>
                                <Card.Img src={bg4}/>
                                <Card.ImgOverlay className={'text-light hide text-start'}>
                                    <h4>BIGdomain.eth</h4>
                                    <p>BIGDomain.eth allows users to mint their own NFT domain names on the ENS that can
                                        then be used and traded on nft marketplaces.
                                        <br/>
                                        <br/>
                                        Allows user to mint different domains that can be used on the ethereum network.
                                        The available domains include: .xyz .eth and </p>
                                    eslint-disable-next-line jsx-a11y/anchor-has-content
                                    <a href={'http://BIGdomains.io'} className={'stretched-link'}/>
                                </Card.ImgOverlay>
                            </Card>
                        </Link>


                    </Col>*/}
                    <Link to={'/comingsoon'}>
                        <Col>
                            <Card className={'overflow-auto p-0 border-0 bg-bigdomain-overlay'}>
                                <Card.Img src={bg5}/>
                                <Card.ImgOverlay className={'text-light hide text-start'}>
                                    <h4>Third Year Project: Blockchain EHR system</h4>
                                    <p>For my third year university project i will be creating an electronic health
                                        records system on the blockchain and simulating patient tasks with a fictional GP.
                                        <br/>
                                        The goal of this project is to build a patient centric health records system
                                        that will dramatically improve things such as continuity of care and viral
                                        tracking in countries such as Cameroon.</p>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Link>

                </Row>
            </Container>
        </>
    )
}

export default Portfolio
