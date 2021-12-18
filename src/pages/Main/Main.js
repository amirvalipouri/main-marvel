import React from 'react'
import {Container , Row , Col ,Button} from 'react-bootstrap'
import './Main.scss'
import Frame from '../../assert/Frame.png';
import Enshot from '../../assert/eenshot.png';
import Carousell from '../../Components/Carousel/Carousell';


const Main = () => {
    return(
        <Container fluid >
            <Row className="w-full">
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Carousell/>
                </Col>
            </Row>
            <Row className="w-full position-relative d-block ">
                <Col className="w-full background-white p-4" xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="w-100 my-2">
                        <p className=" p-title text-center">خدماتي كه ارائه ميدهيم</p>
                    </div>
                    <Row className="w-full mb-4 ">
                        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                            <div className="w-100 d-flex flex-column align-items-center m-2 CARD">
                                <div >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60.249" height="118.907" viewBox="0 0 81.249 118.907">
                                        <path id="rocket-svgrepo-com" d="M115.756,69.29V53.181c0-13.462-4.535-26.815-13.114-38.615A70.484,70.484,0,0,0,89.475.6a3,3,0,0,0-3.6,0A70.47,70.47,0,0,0,72.706,14.566c-8.58,11.8-13.114,25.154-13.114,38.615V69.29A15.57,15.57,0,0,0,47.05,84.543v31.362a3,3,0,0,0,5.5,1.664L65.091,98.752a3,3,0,0,0,.5-1.664V93.914H78.4v8.5c0,4.521,5.178,12.736,6.766,15.146a3,3,0,0,0,5.014,0c1.587-2.41,6.766-10.625,6.766-15.146v-8.5h12.807v3.173a3,3,0,0,0,.5,1.664L122.8,117.569a3,3,0,0,0,5.5-1.664V84.543A15.571,15.571,0,0,0,115.756,69.29ZM65.677,50.179a56.189,56.189,0,0,1,4.46-19.087h35.035a56.506,56.506,0,0,1,4.5,19.087Zm22-43.271A71.03,71.03,0,0,1,102.232,25.09H73.082a69.386,69.386,0,0,1,4.363-6.833A70.482,70.482,0,0,1,87.673,6.908ZM59.591,96.179l-6.538,9.81V84.543a9.561,9.561,0,0,1,6.539-9.059v20.7Zm6-40H84.672V69.549A10.212,10.212,0,0,0,78.4,79.221v8.69H65.594ZM90.943,102.41c0,1.277-1.448,4.462-3.269,7.711-1.821-3.248-3.269-6.434-3.269-7.711V79.222C84.4,76.933,85.9,75,87.674,75s3.269,1.933,3.269,4.222Zm18.81-14.5H96.946v-8.69a10.212,10.212,0,0,0-6.271-9.672V56.183h19.078ZM122.3,105.989l-6.539-9.811v-20.7a9.56,9.56,0,0,1,6.539,9.059Z" transform="translate(-47.05 0)" fill="#35a1f1"/>
                                    </svg>
                                </div>
                                <p className="text-center">افزايش عملكرد سريع شما</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                            <div className="w-100 d-flex flex-column align-items-center m-2 CARD">
                                <div >
                                <svg xmlns="http://www.w3.org/2000/svg" width="100.106" height="118.634" viewBox="0 0 162.106 119.634">
                                    <g id="analysis-lens-svgrepo-com" transform="translate(0.5 0.5)">
                                        <path id="circle34669" d="M105.216,46.679q-.623-.008-1.245,0a43.035,43.035,0,0,0-23.1,7.143c-3.44,2.2-.048,7.335,3.325,5.034A37.2,37.2,0,1,1,78.5,116.32c-2.856-2.895-7.167,1.453-4.248,4.284a43.293,43.293,0,0,0,52.032,6.752l32.447,36.927a3.016,3.016,0,0,0,4.4.142l16.087-16.087a3.017,3.017,0,0,0-.1-4.361l-36.509-33.322a43.215,43.215,0,0,0-37.4-63.977Zm11.772,18.267a3.017,3.017,0,0,0-2.972,3.059V96.661h-4.525V92.639a3.017,3.017,0,1,0-6.033,0v4.021H98.934V75.044a3.017,3.017,0,1,0-6.033,0V96.661H88.376V85.6a3.017,3.017,0,1,0-6.033,0V96.661H77.819v-.5a3.017,3.017,0,1,0-6.033,0v.5H56.7V82.082a3.017,3.017,0,1,0-6.033,0V96.661H35.59V71.525a3.017,3.017,0,1,0-6.033,0V96.661H25.033v-18.1a3.017,3.017,0,1,0-6.033,0V99.677a3.017,3.017,0,0,0,3.016,3.016h18.1v7.541c-.058,4.079,6.091,4.079,6.033,0v-7.541H61.229v7.541c-.058,4.079,6.091,4.079,6.033,0v-7.541h60.327a3.017,3.017,0,0,0,3.016-3.016V89.12c.058-4.079-6.091-4.079-6.033,0v7.541h-4.525V68.005A3.016,3.016,0,0,0,116.987,64.946ZM139.3,115.8l26.4,24.1-11.211,10.419-23.167-26.367c.647-.507,1.287-1.028,1.911-1.576A43.266,43.266,0,0,0,139.3,115.8Zm28.637,26.137,4.782,4.364-11.58,11.58-4.657-5.3Z" transform="translate(-18.999 -46.676)" fill="#35a1f1" stroke="#35a1f1" stroke-width="1"/>
                                    </g>
                                </svg>
                                </div>
                                <p className="text-center">تجزيه تحليل دقيق بازارها</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                        <   div className="w-100 d-flex flex-column align-items-center m-2 CARD">
                                <div >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="90.975" height="118.635" viewBox="0 0 130.975 118.635">
                                        <g id="alarm-bell-svgrepo-com" transform="translate(0 0)">
                                            <g id="Group_24" data-name="Group 24" transform="translate(24.249 3.47)">
                                                <path id="Path_89" data-name="Path 89" d="M232.395,53.176h0a32.532,32.532,0,0,1,8.114,1.022V45.8a8.115,8.115,0,0,0-8.114-8.115h0A8.115,8.115,0,0,0,224.28,45.8v8.4A32.533,32.533,0,0,1,232.395,53.176Z" transform="translate(-191.156 -37.684)" fill="none"/>
                                                <path id="Path_90" data-name="Path 90" d="M177.269,338.712H94.793l8.773-23.058H168.5Z" transform="translate(-94.793 -244.547)" fill="none"/>
                                                <ellipse id="Ellipse_7" data-name="Ellipse 7" cx="8.762" cy="8.762" rx="8.762" ry="8.762" transform="translate(32.476 94.173)" fill="none"/>
                                            </g>
                                            <g id="Group_25" data-name="Group 25" transform="translate(0 0)">
                                                <path id="Path_91" data-name="Path 91" d="M170.338,120.312l-8.693-22.85a3.47,3.47,0,0,0-3.243-2.236H96.935V75.552a29.05,29.05,0,0,1,23.119-28.4l.085-.017q.658-.134,1.327-.238l.227-.032c.335-.049.671-.091,1.009-.129.142-.016.283-.033.425-.047q.537-.051,1.079-.082c.192-.011.384-.019.576-.027.244-.01.488-.015.734-.019q.419-.006.838,0c.245,0,.49.009.734.019.192.008.384.016.576.027.361.021.721.048,1.079.082.142.014.283.031.425.047.338.038.675.08,1.009.129l.227.032q.668.1,1.327.238l.085.017a29.05,29.05,0,0,1,23.119,28.4v9.507a3.47,3.47,0,0,0,6.94,0V75.552A36,36,0,0,0,137.52,41.527V35.7a11.585,11.585,0,0,0-23.169,0v5.823A36,36,0,0,0,89.995,75.552v22.52l-8.54,22.448a3.47,3.47,0,0,0,3.243,4.7h30.215a12.231,12.231,0,1,0,22.047,0h30.222a3.472,3.472,0,0,0,3.157-4.912Zm-49.047-80.4V35.7a4.645,4.645,0,0,1,9.289,0v4.206l-.05-.006c-.339-.043-.679-.081-1.02-.115-.1-.01-.21-.019-.315-.028-.251-.023-.5-.043-.756-.061l-.36-.023q-.376-.022-.755-.036L127,39.628c-.354-.01-.71-.017-1.066-.017s-.712.007-1.066.017l-.322.012q-.378.015-.755.036l-.36.023c-.253.017-.5.038-.756.061-.105.009-.21.018-.315.028q-.512.051-1.02.115Zm4.645,95.9a5.291,5.291,0,1,1,5.291-5.291A5.3,5.3,0,0,1,125.936,135.814ZM89.73,118.284l6.132-16.118h60.147l6.132,16.118Z" transform="translate(-60.449 -24.119)" fill="#35a1f1"/>
                                                <path id="Path_92" data-name="Path 92" d="M419.461,230.679a3.47,3.47,0,0,1-2.078-6.251,8.743,8.743,0,0,0,0-14.024,3.47,3.47,0,0,1,4.151-5.562,15.682,15.682,0,0,1,0,25.148A3.456,3.456,0,0,1,419.461,230.679Z" transform="translate(-309.575 -158.098)" fill="#35a1f1"/>
                                                <path id="Path_93" data-name="Path 93" d="M456.312,215.288a3.47,3.47,0,0,1-2.265-6.1,20.08,20.08,0,0,0,0-30.449,3.47,3.47,0,0,1,4.528-5.26,27.02,27.02,0,0,1,0,40.968A3.456,3.456,0,0,1,456.312,215.288Z" transform="translate(-337 -134.646)" fill="#35a1f1"/>
                                                <path id="Path_94" data-name="Path 94" d="M58.047,230.679a3.453,3.453,0,0,1-2.073-.689,15.682,15.682,0,0,1,0-25.148,3.47,3.47,0,0,1,4.15,5.562,8.743,8.743,0,0,0,0,14.024,3.47,3.47,0,0,1-2.078,6.251Z" transform="translate(-36.96 -158.099)" fill="#35a1f1"/>
                                                <path id="Path_95" data-name="Path 95" d="M11.662,215.289a3.457,3.457,0,0,1-2.262-.84,27.02,27.02,0,0,1,0-40.969,3.47,3.47,0,1,1,4.528,5.26,20.079,20.079,0,0,0,0,30.449,3.47,3.47,0,0,1-2.266,6.1Z" transform="translate(0 -134.647)" fill="#35a1f1"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <p className="text-center">اطلاع رساني سريع بازارها</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                            <div className="w-100 d-flex flex-column align-items-center m-2 CARD">
                                <div className="mt-3" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="110.28" height="100.634" viewBox="0 0 125.28 119.634">
                                        <g id="Group_23" data-name="Group 23" transform="translate(0.5 0.5)">
                                            <path id="support-svgrepo-com" d="M124.279,56.079A42.338,42.338,0,0,0,86.1,13.923a6.454,6.454,0,0,0-6.186-4.648H44.366a6.453,6.453,0,0,0-6.186,4.648A42.344,42.344,0,0,0,0,56.079V89.9a13.041,13.041,0,0,0,13.026,13.027H23.167a5.479,5.479,0,0,0,5.473-5.473V61.514a5.479,5.479,0,0,0-5.473-5.473H13.026a12.966,12.966,0,0,0-8.461,3.134v-3.1a37.778,37.778,0,0,1,33.981-37.6,6.448,6.448,0,0,0,5.82,3.693H79.914a6.448,6.448,0,0,0,5.82-3.693,37.774,37.774,0,0,1,33.979,37.605v3.095a12.967,12.967,0,0,0-8.46-3.133H101.113a5.479,5.479,0,0,0-5.473,5.473V97.457a5.479,5.479,0,0,0,5.473,5.473h10.141a12.966,12.966,0,0,0,8.461-3.134v1.661A15.66,15.66,0,0,1,104.073,117.1H76.413a8.541,8.541,0,0,0-8.215-6.245H59.872a8.527,8.527,0,1,0,0,17.054H68.2a8.541,8.541,0,0,0,8.215-6.245h27.661a20.23,20.23,0,0,0,20.207-20.207l0-45.379Zm-100.2,5.435V97.457a.909.909,0,0,1-.908.908H22.26V60.606h.908A.909.909,0,0,1,24.075,61.514Zm-11.049-.908h4.668v37.76H13.026A8.471,8.471,0,0,1,4.565,89.9V69.067A8.471,8.471,0,0,1,13.026,60.606Zm66.888-43H44.366a1.881,1.881,0,1,1,0-3.761H79.914a1.881,1.881,0,1,1,0,3.761ZM100.2,97.457V61.514a.909.909,0,0,1,.908-.908h.908v37.76h-.908A.909.909,0,0,1,100.2,97.457ZM68.2,123.344H59.872a3.962,3.962,0,1,1,0-7.924H68.2a3.962,3.962,0,1,1,0,7.924Zm43.056-24.979h-4.668V60.606h4.668a8.471,8.471,0,0,1,8.461,8.461V89.9A8.471,8.471,0,0,1,111.254,98.366Z" transform="translate(0 -9.275)" fill="#35a1f1" stroke="#35a1f1" stroke-width="1"/>
                                            <text id="_24" data-name="24" transform="translate(43.454 68.022)" fill="#007cd8" font-size="28" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">24</tspan></text>
                                            <g id="Ellipse_6" data-name="Ellipse 6" transform="translate(33.894 30.723)" fill="none" stroke="#35a1f1" stroke-width="4">
                                            <ellipse cx="28.681" cy="28.681" rx="28.681" ry="28.681" stroke="none"/>
                                            <ellipse cx="28.681" cy="28.681" rx="26.681" ry="26.681" fill="none"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <p className="text-center">پشتيباني شبانه روزي</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col className="position-absolute start-0 end-0  "  xs={12} sm={12} md={12} lg={12} xl={12}>
                    
                </Col>
            </Row>

            <Row  className="position-relative">
                <Col className=" CARD2 p-4"  xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Row className="w-full my-5">
                        <div className="mb-4"  >
                            <p className=" p-title text-center">در چه زمينه هايي شما را راهنمايي ميكنيم؟</p>
                            <span className="d-block text-center">راهكار هاي اقتصادي بر پايه مطالعه و آگاه سازي</span>
                            <span className="d-block text-center">پيشرفت اقتصادي با ذهني آگاه و پويا امكانپذير است</span>
                        </div>
                        <Col  className="w-full my-3 d-flex justify-content-center align-items-center" xs={12} sm={6} md={4} lg={2} xl={2}>
                            <button>
                                اقتصاد پايه
                            </button>
                        </Col>
                        <Col  className="w-full my-3 d-flex justify-content-center align-items-center" xs={12} sm={6} md={4} lg={2} xl={2}>
                            <button>
                                مديريت سرمايه 
                            </button>
                        </Col>
                        <Col  className="w-full my-3 d-flex justify-content-center align-items-center" xs={12} sm={6} md={4} lg={2} xl={2}>
                            <button>
                                 ارزهاي مجازي
                            </button>
                        </Col>
                        <Col  className="w-full my-3 d-flex justify-content-center align-items-center" xs={12} sm={6} md={4} lg={2} xl={2}>
                            <button>
                                 پيشبيني عاي اقتصادي
                            </button>
                        </Col>
                        <Col  className="w-full my-3 d-flex justify-content-center align-items-center" xs={12} sm={6} md={4} lg={2} xl={2}>
                            <button>
                                اقتصاد كلان
                            </button>
                        </Col>
                        <Col  className="w-full my-3 d-flex justify-content-center align-items-center" xs={12} sm={6} md={4} lg={2} xl={2}>
                            <button>
                                 تحليل بازار
                            </button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col  xs={12} sm={12} md={12} lg={6} xl={6}>
                    <div className="d-flex justify-content-center align-items-center justify-content-xs-center my-5">
                        <span className="Frame1">
                            <img className="w-full h-full" src={Frame} alt="Frame"/>
                        </span>
                        <span className="Frame2">
                            <img src={Frame} alt="Frame"/>
                        </span>
                        <span className="Frame3">
                            <img src={Frame} alt="Frame"/>
                        </span>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <div className="d-flex flex-column align-items-center my-5 ">
                        <p className="text-center  p-title">ويندوز سرور مخصوص تريد <span className="text-center p-title" style={{fontSize : "20px"}}>+ آموزش ويدئويي</span></p>
                        <p className="text-center p-server">Ram : 4GB</p>
                        <p className="text-center p-server ">CPU : 2 Core</p>
                        <p className="text-center p-server ">Hard : 70GB NYME</p>
                    </div>
                    <div className="w-100 d-flex justify-content-center">
                    <Button className="button-server"  size="lg">
                                    <span className="mx-2 my-1"><svg xmlns="http://www.w3.org/2000/svg" id="Backward_arrow_small" data-name="Backward arrow small" width="10.1" height="16.4" viewBox="0 0 12.1 19.4">
                                    <path id="Path_36" data-name="Path 36" d="M9.7,12.1,0,2.777,2.889,0,9.7,6.546,16.511,0,19.4,2.777Z" transform="translate(12.1) rotate(90)" fill="#EFEFEF"/>
                                    </svg></span>توضيحات بيشتر و خريد سرويس
                    </Button>
                    </div>
                </Col>
            </Row>

            <Row className="CARD3">
                <Col className="d-flex justify-content-center mt-4" xs={12} sm={12} md={12} lg={6} xl={6}>
                    <div className="CARD3-1">
                        <img src={Enshot} alt="paper" />
                    </div>
                </Col>
                <Col className="d-flex justify-content-start flex-column align-items-center p-4" xs={12} sm={12} md={12} lg={6} xl={6}>
                    <div  className="CARD3-2 mt-5 d-flex justify-content-start flex-column align-items-center">
                        <p className="text-center">مجوز ثبت شركت هاي انگلستان مارول تريد</p>
                        <span className="d-block text-center">دفتر جديد مارول تريد در انگلستان همراه با مجوز ثبتي آن</span>
                        <span className="d-block text-center">از لينك زير مي توانيد استعلام اين مدارك را به راحتي بگيريد</span>
                        <Button className="button-england mt-5"  size="lg">
                                    <span className="mx-2 my-1"><svg xmlns="http://www.w3.org/2000/svg" id="Backward_arrow_small" data-name="Backward arrow small" width="10.1" height="16.4" viewBox="0 0 12.1 19.4">
                                    <path id="Path_36" data-name="Path 36" d="M9.7,12.1,0,2.777,2.889,0,9.7,6.546,16.511,0,19.4,2.777Z" transform="translate(12.1) rotate(90)" fill="#EFEFEF"/>
                                    </svg></span>استعلام مجوز انگلستان
                    </Button>
                    </div>
                    
                </Col>
            </Row>
            
        </Container>
    )
}

export default Main
