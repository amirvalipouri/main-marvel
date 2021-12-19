import React from 'react'

import {Container , Row , Col , Button} from "react-bootstrap"
import ServerAmico from '../../assert/Server-amico.png'
import p130 from '../../assert/130.png'
import p131 from '../../assert/131.png'
import './Server.scss'

function Server() {
    return (
        <div  className="SERVER w-full">
            <Row className="Row1 w-full">
                <Col className="col-1 d-flex  align-items-center" xs={12} md={12} sm={12} lg={12} xl={12}>
                    <div className="w-full  d-flex justify-content-center align-items-center opacity-75">
                        <p className=" text-center text-white opacity-100">ويندوز سرور تريد</p>
                    </div>
                </Col>
            </Row>
            <Row className="Row2 w-full d-sm-block d-lg-flex flex-lg-row justify-content-between ">
                <Col className=" col-1 d-flex justify-content-center align-items-center" xs={12} sm={12} md={12} lg={6} xl={6} >
                    <div>
                        <img className="server-img" src={ServerAmico} alt="server amico" />
                    </div>
                </Col>
                <Col className=" col-2  p-4 w-full my-5 " xs={12} sm={12} md={12} lg={6} xl={6} >
                    <p className="text-center iranSans paraghraph-1 mt-2">:توضیحات ویندوز سرور ترید</p>
                    <p className="text-end iranSans paraghraph-2  mt-4">
                    ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.ست. چاپگرهن بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد 
                    </p>
                </Col>
                <Col className="col-3 w-full p-4  "  xs={12} sm={12} md={12} lg={12} xl={12}>

                    <Row className="Row2-1 w-75 mx-auto d-flex justify-content-center align-items-center">
                        <Col className="w-full col-3-1" xs={4} sm={4} md={4} lg={4} xl={4} >
                            <img src={p131} alt="p131" className=" w-full h-full "/>
                        </Col>
                        <Col className="w-full" xs={4} sm={4} md={4} lg={4} xl={4} >
                            <div className="buy-server p-3">
                                <p className="text-center text-white mb-4 mt-2 iranSans">سرور 1</p>
                                <p  className="text-center text-white mt-5 iranSans">ماهيانه</p>
                                <p className="text-center text-white  iranSans">  تومان  500.000 </p>
                                <Button className="btn-server text-white w-100 mt-5 mx-auto"><span className="mx-2 my-1"><svg xmlns="http://www.w3.org/2000/svg" id="Backward_arrow_small" data-name="Backward arrow small" width="8.1" height="14.4" viewBox="0 0 12.1 19.4">
                                    <path id="Path_36" data-name="Path 36" d="M9.7,12.1,0,2.777,2.889,0,9.7,6.546,16.511,0,19.4,2.777Z" transform="translate(12.1) rotate(90)" fill="#ffffff"/>
                                    </svg></span>خريد</Button>
                            </div>
                        </Col>
                        <Col className=" col-3-3" xs={4} sm={4} md={4} lg={4} xl={4} >
                            <img src={p130} alt="p130" className=" w-full h-full "/>
                        </Col>
                    </Row>

                    <Row className="Row2-1 w-75 mx-auto d-flex justify-content-center align-items-center ">
                        <Col className="w-full col-3-1" xs={4} sm={4} md={4} lg={4} xl={4} >
                            <img src={p131} alt="p131" className=" w-full h-full "/>
                        </Col>
                        <Col className="w-full" xs={4} sm={4} md={4} lg={4} xl={4} >
                            <div className="buy-server p-3">
                                <p className="text-center text-white mb-4 mt-2 iranSans">سرور 1</p>
                                <p  className="text-center text-white mt-5 iranSans">ماهيانه</p>
                                <p className="text-center text-white  iranSans">  تومان  500.000 </p>
                                <Button className="btn-server text-white w-100 mt-5 mx-auto"><span className="mx-2 my-1"><svg xmlns="http://www.w3.org/2000/svg" id="Backward_arrow_small" data-name="Backward arrow small" width="8.1" height="14.4" viewBox="0 0 12.1 19.4">
                                    <path id="Path_36" data-name="Path 36" d="M9.7,12.1,0,2.777,2.889,0,9.7,6.546,16.511,0,19.4,2.777Z" transform="translate(12.1) rotate(90)" fill="#ffffff"/>
                                    </svg></span>خريد</Button>
                            </div>
                        </Col>
                        <Col className=" col-3-3" xs={4} sm={4} md={4} lg={4} xl={4} >
                            <img src={p130} alt="p130" className=" w-full h-full "/>
                        </Col>
                    </Row>


                    <Row className="Row2-1 w-75 mx-auto d-flex justify-content-center align-items-center ">
                        <Col className="w-full col-3-1" xs={4} sm={4} md={4} lg={4} xl={4} >
                            <img src={p131} alt="p131" className=" w-full h-full "/>
                        </Col>
                        <Col className="w-full" xs={4} sm={4} md={4} lg={4} xl={4} >
                            <div className="buy-server p-3">
                                <p className="text-center text-white mb-4 mt-2 iranSans">سرور 1</p>
                                <p  className="text-center text-white mt-5 iranSans">ماهيانه</p>
                                <p className="text-center text-white  iranSans">  تومان  500.000 </p>
                                <Button className="btn-server text-white w-100 mt-5 mx-auto"><span className="mx-2 my-1"><svg xmlns="http://www.w3.org/2000/svg" id="Backward_arrow_small" data-name="Backward arrow small" width="8.1" height="14.4" viewBox="0 0 12.1 19.4">
                                    <path id="Path_36" data-name="Path 36" d="M9.7,12.1,0,2.777,2.889,0,9.7,6.546,16.511,0,19.4,2.777Z" transform="translate(12.1) rotate(90)" fill="#ffffff"/>
                                    </svg></span>خريد</Button>
                            </div>
                        </Col>
                        <Col className=" col-3-3" xs={4} sm={4} md={4} lg={4} xl={4} >
                            <img src={p130} alt="p130" className=" w-full h-full "/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <Row className="Row3">
                <Col className="col-1">

                </Col>
            </Row> */}
        </div>
    )
}

export default Server
