import React from 'react'

import {Outlet} from 'react-router-dom';
import {Container , Row , Col} from 'react-bootstrap'
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import './Layout.scss';


const Layout = () =>{
    return(
        <Container fluid className="w-full h-full">
            <Row className="position-relative">
                <Col className="layout-header" xs={12} md={12} sm={12} lg={12} xl={12}>
                    <Header/>
                </Col>
            </Row>
            <main className="w-full h-full" style={{marginTop:"80px"}}>
                <Outlet/>
            </main>
            <Row className="position-relative">
                <Col  className="layout-footer" xs={12} md={12} sm={12} lg={12} xl={12}>
                    <Footer/>
                </Col>
            </Row>
        </Container>
    )
}

export default Layout
