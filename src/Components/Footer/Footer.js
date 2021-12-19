import React from 'react'
import { Container , Row , Col } from "react-bootstrap"
import "./Footer.scss";

const Footer = () => {
    return(
        <Container fluid className="w-full overflow-hidden">
            <Row>
                <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
                    <footer className=" FOOTER p-3">
                        <Row className="d-flex justify-content-center align-items-center p-5">
                            <Col xs={12} sm={6} md={6} lg={3} xl={3} className="p-3 d-flex justify-content-center align-items-center">
                                <button className="footer-Btn p-2"><span className="mx-2 my-1"><svg xmlns="http://www.w3.org/2000/svg" id="Backward_arrow_small" data-name="Backward arrow small" width="10.1" height="16.4" viewBox="0 0 12.1 19.4">
                                    <path id="Path_36" data-name="Path 36" d="M9.7,12.1,0,2.777,2.889,0,9.7,6.546,16.511,0,19.4,2.777Z" transform="translate(12.1) rotate(90)" fill="#676767"/>
                                    </svg></span>Google Play دانلود اپليكيشن از 
                                </button>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={3} xl={3} className="p-3 d-flex justify-content-center align-items-center">
                                <button className="footer-Btn p-2"><span className="mx-2 my-1"><svg xmlns="http://www.w3.org/2000/svg" id="Backward_arrow_small" data-name="Backward arrow small" width="10.1" height="16.4" viewBox="0 0 12.1 19.4">
                                    <path id="Path_36" data-name="Path 36" d="M9.7,12.1,0,2.777,2.889,0,9.7,6.546,16.511,0,19.4,2.777Z" transform="translate(12.1) rotate(90)" fill="#676767"/>
                                    </svg></span>App Store دانلود اپليكيشن از </button>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={3} xl={3} className="p-3 d-flex justify-content-center align-items-center">
                                <button className="footer-Btn p-2">دانلود اپليكيشن با لينك مستقيم</button>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={3} xl={3} className="p-3 mt-2 d-flex justify-content-center align-items-center">
                                <p className="footer-p">اپليكيشن مارول تريد براي آگاهي تلاش ميكند</p>
                            </Col>
                        </Row>

                        <Row className="d-flex justify-content-center align-items-start  p-5" >
                            <Col className="d-flex justify-content-center flex-column align-items-center  "  xs={12} sm={6} md={6} lg={3} xl={3}>
                                <div className="d-flex justify-content-center align-items-center flex-column">
                                    <p className=" header-P ">شبكه هاي اجتماعي</p>
                                    <div className="d-flex justify-content-between align-items-center p-2">
                                        <span className="cursor mx-2">
                                            <a href="https://www.facebook.com">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12.63" height="29.257" viewBox="0 0 14.63 29.257">
                                                <path id="facebook_1_" data-name="facebook (1)" d="M18.146,4.858h2.671V.206A34.489,34.489,0,0,0,16.925,0c-3.851,0-6.489,2.422-6.489,6.874v4.1H6.187v5.2h4.25V29.257h5.21V16.173h4.078l.647-5.2H15.645V7.39c0-1.5.406-2.532,2.5-2.532Z" transform="translate(-6.187)" fill="#676767"/>
                                            </svg>
                                            </a>
                                        </span>
                                        <span className="cursor mx-2">
                                            <a href="https://www.telegram.com">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30.309" height="26.925" viewBox="0 0 32.309 26.925">
                                                <path id="telegram_3_" data-name="telegram (3)" d="M12.677,19.745l-.534,7.517a1.869,1.869,0,0,0,1.493-.723l3.585-3.426,7.428,5.44c1.362.759,2.322.359,2.69-1.253L32.215,4.452h0c.432-2.014-.728-2.8-2.056-2.307L1.5,13.116c-1.956.759-1.926,1.85-.333,2.344l7.327,2.279,17.02-10.65c.8-.53,1.529-.237.93.293Z" transform="translate(0 -2)" fill="#676767"/>
                                            </svg>
                                            </a>
                                        </span>
                                        <span className="cursor mx-2">
                                            <a href="https://twitter.com">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30.886" height="26.925" viewBox="0 0 32.886 26.925">
                                                <path id="XMLID_827_" d="M32.139,31.2a12.466,12.466,0,0,1-1.591.58,7.031,7.031,0,0,0,1.431-2.517.53.53,0,0,0-.776-.618,12.517,12.517,0,0,1-3.7,1.462,7.063,7.063,0,0,0-12,5.046,7.2,7.2,0,0,0,.058.912A18.074,18.074,0,0,1,3.155,29.487a.531.531,0,0,0-.869.068,7.07,7.07,0,0,0,.724,8.126,5.98,5.98,0,0,1-.945-.422.53.53,0,0,0-.788.452c0,.031,0,.063,0,.094a7.085,7.085,0,0,0,3.456,6.071c-.179-.018-.359-.044-.537-.078a.53.53,0,0,0-.6.683,7.057,7.057,0,0,0,5.171,4.732,12.49,12.49,0,0,1-6.676,1.905,12.773,12.773,0,0,1-1.5-.088A.53.53,0,0,0,.242,52a19.039,19.039,0,0,0,10.3,3.018,18.315,18.315,0,0,0,14.19-6.233,19.755,19.755,0,0,0,4.918-12.875c0-.194,0-.389-.009-.584a13.724,13.724,0,0,0,3.158-3.345.53.53,0,0,0-.656-.78Z" transform="translate(0.002 -28.097)" fill="#676767"/>
                                            </svg>
                                            </a>
                                        </span>
                                        <span className="cursor mx-2">
                                            <a href="https://www.instagram.com/">
                                            <svg xmlns="http://www.w3.org/2000/svg" id="instagram_3_" data-name="instagram (3)" width="27.06" height="29.066" viewBox="0 0 29.06 29.066">
                                                <path id="Path_97" data-name="Path 97" d="M29.435,8.545a10.621,10.621,0,0,0-.676-3.526A7.446,7.446,0,0,0,24.506.767,10.648,10.648,0,0,0,20.98.091C19.425.017,18.931,0,14.984,0s-4.44.017-5.99.085A10.624,10.624,0,0,0,5.468.761,7.092,7.092,0,0,0,2.89,2.442,7.156,7.156,0,0,0,1.215,5.014,10.649,10.649,0,0,0,.539,8.54c-.074,1.556-.091,2.05-.091,6s.017,4.44.085,5.99a10.62,10.62,0,0,0,.676,3.526,7.444,7.444,0,0,0,4.253,4.253,10.649,10.649,0,0,0,3.526.676c1.55.068,2.044.085,5.99.085s4.44-.017,5.99-.085a10.618,10.618,0,0,0,3.526-.676,7.435,7.435,0,0,0,4.253-4.253,10.656,10.656,0,0,0,.676-3.526c.068-1.55.085-2.044.085-5.99s-.006-4.44-.074-5.99ZM26.818,20.413a7.967,7.967,0,0,1-.5,2.7,4.822,4.822,0,0,1-2.76,2.76,8,8,0,0,1-2.7.5c-1.533.068-1.993.085-5.871.085s-4.344-.017-5.871-.085a7.963,7.963,0,0,1-2.7-.5,4.473,4.473,0,0,1-1.669-1.085,4.519,4.519,0,0,1-1.085-1.669,8,8,0,0,1-.5-2.7c-.068-1.533-.085-1.993-.085-5.871S3.1,10.2,3.169,8.676a7.963,7.963,0,0,1,.5-2.7A4.418,4.418,0,0,1,4.758,4.31,4.512,4.512,0,0,1,6.428,3.225a8,8,0,0,1,2.7-.5C10.658,2.657,11.118,2.64,15,2.64s4.344.017,5.871.085a7.967,7.967,0,0,1,2.7.5A4.469,4.469,0,0,1,25.233,4.31a4.518,4.518,0,0,1,1.085,1.669,8,8,0,0,1,.5,2.7c.068,1.533.085,1.993.085,5.871s-.017,4.332-.085,5.865Zm0,0" transform="translate(-0.449 0)" fill="#707070"/>
                                                <path id="Path_98" data-name="Path 98" d="M132.416,124.5a7.467,7.467,0,1,0,7.467,7.467A7.468,7.468,0,0,0,132.416,124.5Zm0,12.31a4.843,4.843,0,1,1,4.843-4.843A4.844,4.844,0,0,1,132.416,136.81Zm0,0" transform="translate(-117.88 -117.431)" fill="#707070"/>
                                                <path id="Path_99" data-name="Path 99" d="M365.936,90.345a1.743,1.743,0,1,1-1.743-1.743A1.743,1.743,0,0,1,365.936,90.345Zm0,0" transform="translate(-341.895 -83.571)" fill="#707070"/>
                                            </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </Col>
                            <Col style={{height:"200px"}}  className="h-auto d-flex justify-content-center flex-column align-items-center"  xs={12} sm={6} md={6} lg={3} xl={3}>
                                <div className="d-flex justify-content-center flex-column align-items-end  ">
                                    <p className="header-P">اطلاعات تماس</p>
                                    <div className="d-flex justify-content-center align-items-center" ><p className="mt-2 mx-2">info@marveltrade.org</p><span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30.472" height="27.781" viewBox="0 0 36.472 27.781">
                                        <path id="gmail" d="M33.266,61H3.206A3.209,3.209,0,0,0,0,64.206v21.37a3.209,3.209,0,0,0,3.206,3.206H33.266a3.209,3.209,0,0,0,3.206-3.206V64.206A3.209,3.209,0,0,0,33.266,61Zm-4.644,2.137L18.236,70.886,7.849,63.137Zm-25.417,0h1.07L17.6,73.076a1.069,1.069,0,0,0,1.278,0L32.2,63.137h1.07A1.07,1.07,0,0,1,34.335,64.2l-16.1,12.024L2.137,64.2a1.07,1.07,0,0,1,1.068-1.067ZM17.6,78.418a1.069,1.069,0,0,0,1.279,0l11.185-8.354V86.644H6.411V70.064ZM2.137,85.576v-18.7l2.137,1.6V86.644H3.206A1.07,1.07,0,0,1,2.137,85.576Zm31.129,1.069H32.2V68.468l2.137-1.6v18.7A1.07,1.07,0,0,1,33.266,86.644Z" transform="translate(0 -61)" fill="#707070"/>
                                        </svg>
                                        </span></div>
                                    <div className="d-flex justify-content-center  align-items-center" ><p  className="mt-2 mx-2">021-28421120</p><span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27.694" height="32.763" viewBox="0 0 32.694 32.763">
                                        <g id="phone-call" transform="translate(-0.539)">
                                            <g id="Group_27" data-name="Group 27" transform="translate(0.539 0)">
                                            <path id="Path_100" data-name="Path 100" d="M32.376,24.045,27.8,19.472a3.041,3.041,0,0,0-5.062,1.143,3.112,3.112,0,0,1-3.592,1.959c-3.266-.816-7.675-5.062-8.491-8.491a2.959,2.959,0,0,1,1.959-3.592,3.041,3.041,0,0,0,1.143-5.062L9.189.857a3.261,3.261,0,0,0-4.409,0l-3.1,3.1c-3.1,3.266.327,11.92,8,19.595s16.329,11.267,19.595,8l3.1-3.1A3.261,3.261,0,0,0,32.376,24.045Z" transform="translate(-0.539 0)" fill="#707070"/>
                                            </g>
                                        </g>
                                        </svg>
                                        </span></div>
                                    <div className="d-flex justify-content-center  align-items-center" ><p className="mt-2 mx-2">@marvel_trade</p><span>
                                            <a href="https://www.instagram.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" id="instagram_3_" data-name="instagram (3)" width="27.06" height="29.066" viewBox="0 0 29.06 29.066">
                                                    <path id="Path_97" data-name="Path 97" d="M29.435,8.545a10.621,10.621,0,0,0-.676-3.526A7.446,7.446,0,0,0,24.506.767,10.648,10.648,0,0,0,20.98.091C19.425.017,18.931,0,14.984,0s-4.44.017-5.99.085A10.624,10.624,0,0,0,5.468.761,7.092,7.092,0,0,0,2.89,2.442,7.156,7.156,0,0,0,1.215,5.014,10.649,10.649,0,0,0,.539,8.54c-.074,1.556-.091,2.05-.091,6s.017,4.44.085,5.99a10.62,10.62,0,0,0,.676,3.526,7.444,7.444,0,0,0,4.253,4.253,10.649,10.649,0,0,0,3.526.676c1.55.068,2.044.085,5.99.085s4.44-.017,5.99-.085a10.618,10.618,0,0,0,3.526-.676,7.435,7.435,0,0,0,4.253-4.253,10.656,10.656,0,0,0,.676-3.526c.068-1.55.085-2.044.085-5.99s-.006-4.44-.074-5.99ZM26.818,20.413a7.967,7.967,0,0,1-.5,2.7,4.822,4.822,0,0,1-2.76,2.76,8,8,0,0,1-2.7.5c-1.533.068-1.993.085-5.871.085s-4.344-.017-5.871-.085a7.963,7.963,0,0,1-2.7-.5,4.473,4.473,0,0,1-1.669-1.085,4.519,4.519,0,0,1-1.085-1.669,8,8,0,0,1-.5-2.7c-.068-1.533-.085-1.993-.085-5.871S3.1,10.2,3.169,8.676a7.963,7.963,0,0,1,.5-2.7A4.418,4.418,0,0,1,4.758,4.31,4.512,4.512,0,0,1,6.428,3.225a8,8,0,0,1,2.7-.5C10.658,2.657,11.118,2.64,15,2.64s4.344.017,5.871.085a7.967,7.967,0,0,1,2.7.5A4.469,4.469,0,0,1,25.233,4.31a4.518,4.518,0,0,1,1.085,1.669,8,8,0,0,1,.5,2.7c.068,1.533.085,1.993.085,5.871s-.017,4.332-.085,5.865Zm0,0" transform="translate(-0.449 0)" fill="#707070"/>
                                                    <path id="Path_98" data-name="Path 98" d="M132.416,124.5a7.467,7.467,0,1,0,7.467,7.467A7.468,7.468,0,0,0,132.416,124.5Zm0,12.31a4.843,4.843,0,1,1,4.843-4.843A4.844,4.844,0,0,1,132.416,136.81Zm0,0" transform="translate(-117.88 -117.431)" fill="#707070"/>
                                                    <path id="Path_99" data-name="Path 99" d="M365.936,90.345a1.743,1.743,0,1,1-1.743-1.743A1.743,1.743,0,0,1,365.936,90.345Zm0,0" transform="translate(-341.895 -83.571)" fill="#707070"/>
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </Col>
                            <Col  className="h-auto d-flex justify-content-end flex-column align-items-center"  xs={12} sm={6} md={6} lg={3} xl={3}>
                                <div className="d-flex justify-content-center flex-column align-items-end">
                                    <p className="header-P">آخرين مقالات</p>
                                    <div><p>همه چيز درباره بيت كوين</p></div>
                                    <div><p> اصطلاحات معاملاتي در بازار فاركس</p></div>
                                    <div><p>معرفي چند اصطلاح در فاركس</p></div>
                                </div>
                            </Col>
                            <Col  className="h-auto d-flex justify-content-end flex-column align-items-center"  xs={12} sm={6} md={6} lg={3} xl={3}>
                                <div className="d-flex justify-content-center flex-column align-items-end">
                                    <p className="header-P">خدمات مارول</p>
                                    <div><p>ويندوز سرور تريد</p></div>
                                    <div><p> VIP خدمات</p></div>
                                    <div><p>مشتريان خدمات باينانس</p></div>
                                </div>
                            </Col>
                        </Row>
                        <div className="w-100">
                            <span className="footer-span my-2"></span>
                            <p className="text-center text-secondary mt-5">.تمام حقوق اين سايت متعلق به مارول تريد مي باشد </p>
                        </div>
                    </footer>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
