import React from 'react'

import {Row , Col } from 'react-bootstrap';
import './Profile.scss';
import ProfileImage from '../../assert/Profile.png'
import {useDispatch} from "react-redux"
import { authAction } from '../../store/auth';
import {  useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutHandler = () =>{
        dispatch(authAction.Logout());
        navigate("/")
    }

    const test = [{title : "سرور 1 ماهيانه" , ram : "2048MB" , cpu : 3 , band : "2500 GB" , saveMemory : "20GB" , location : "آلمان" , price : "500.000 تومان"},
    {title : "سرور 1 ماهيانه" , ram : "2048MB" , cpu : 3 , band : "2500 GB" , saveMemory : "20GB" , location : "آلمان" , price : "500.000 تومان"}]
    return(
        <div className="w-100 bg-white PROFILE">
            <Row className="Row1">
                <Col className="col-1 my-4  mx-auto" xs={12} sm={12} md={12} lg={12} xl={12} >
                    <p className="text-center w-full iranSans my-4 profile-p">پروفایل</p>
                    <div className="d-flex justify-content-between align-items-center flex-lg-row flex-md-column flex-sm-column flex-xs-column w-full p-3 Card bg-card">
                        <div  className="d-flex  align-items-center w-full p-2 mt-2">
                            <p onClick={logoutHandler} className="text-danger cursor-pointer iranSans" ><span className='mr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" id="exit-2860_1_" data-name="exit-2860 (1)" width="20.705" height="22.45" viewBox="0 0 22.705 25.45">
                                <g id="Group_110" data-name="Group 110" transform="translate(0 0)">
                                    <path id="Path_1111" data-name="Path 1111" d="M78.233,80.461c-.009-.018-.017-.037-.024-.056a.8.8,0,0,1-.029-.1c0-.018-.01-.035-.013-.053a.84.84,0,0,1-.016-.155h0a.864.864,0,0,1,.016-.155c0-.018.008-.035.013-.053a.852.852,0,0,1,.029-.1c.007-.019.016-.038.024-.056a.84.84,0,0,1,.044-.081c.011-.018.022-.036.034-.053s.009-.016.015-.024l3.311-4.311a.848.848,0,1,1,1.345,1.034L80.72,79.253H93.914a.848.848,0,0,1,0,1.7H80.72l2.263,2.945a.848.848,0,0,1-1.345,1.034l-3.311-4.31c-.006-.008-.01-.016-.016-.024s-.023-.035-.034-.052A.877.877,0,0,1,78.233,80.461Z" transform="translate(-78.151 -67.376)" fill="#e84337"/>
                                    <path id="Path_1112" data-name="Path 1112" d="M18.642,25.45H33.089a.848.848,0,0,0,.848-.848V.848A.848.848,0,0,0,33.089,0H18.642a.848.848,0,0,0-.848.848v8.5a.848.848,0,1,0,1.7,0V1.7h12.75V23.754H19.49V15.726a.848.848,0,1,0-1.7,0V24.6A.848.848,0,0,0,18.642,25.45Z" transform="translate(-11.232)" fill="#e84337"/>
                                </g>
                                </svg>
                                </span> خروج از حساب کاربری 
                            </p>
                        </div>

                        <div className="w-full h-full">
                            <div className="d-flex justify-content-between  align-items-center profile-image p-1 w-full">
                                <p className='iranSans mx-4 mt-3'>شماره موبايل : 09101411633</p>
                                <img src={ProfileImage} width="40px" height="40px" alt="profile" className='ml-2' />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="Row2">
                
                <Col className="col-1 mx-auto my-4"  xs={12} sm={12} md={12} lg={12} xl={12} >
                    <div className='bg-white p-2 border w-100 div-1 '>
                        <p className='text-center mt-1 iranSans'>خرید های قبلی شما</p>
                    </div>
                    <div className="div-2 bg-card">
                        <Row>
                            {test.map((i)=>
                                <Col xs={12} md={12} sm={12} lg={6} xl={126}>
                                    <div className="w-75 my-4 mx-auto recied">
                                        <div className="w-100 ">
                                            <p className="iranSans text-center mt-3">{i.title}</p>
                                        </div>
                                        <hr style={{color : "#007CD8"}} />
                                        <div className="d-flex flex-column mt-4 px-4 py-4 ">
                                            <div className="d-flex flex-column-reverse justify-content-center  align-items-center  flex-md-row justify-content-md-between align-items-md-center">
                                                <p className="iranSans">{i.ram}</p>
                                                <p className="iranSans">RAM</p>
                                            </div>
                                            <div className="d-flex flex-column-reverse justify-content-center  align-items-center  flex-md-row justify-content-md-between align-items-md-center">
                                                <p  className="iranSans">{i.cpu}</p>
                                                <p className="iranSans">CPU CORE</p>
                                            </div>
                                            <div className="d-flex flex-column-reverse justify-content-center  align-items-center  flex-md-row justify-content-md-between align-items-md-center">
                                                <p className="iranSans">{i.band}</p>
                                                <p className="iranSans">پهناي باند</p>
                                            </div>
                                            <div className="d-flex flex-column-reverse justify-content-center  align-items-center  flex-md-row justify-content-md-between align-items-md-center">
                                                <p className="iranSans">{i.saveMemory}</p>
                                                <p className="iranSans">حافظه ذخيره سازي</p>
                                            </div>
                                            <div className="d-flex flex-column-reverse justify-content-center  align-items-center  flex-md-row justify-content-md-between align-items-md-center">
                                                <p className="iranSans">{i.location}</p>
                                                <p className="iranSans">محل سرور</p>
                                            </div>

                                            <div className="d-flex flex-column-reverse justify-content-center  align-items-center  flex-md-row justify-content-md-between align-items-md-center ">
                                                <p className="iranSans">{i.price}</p>
                                                <p className="iranSans">قيمت</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )}
                            
                        </Row>
                    </div>   
                </Col>
            </Row>
        </div>
    )
}

export default Profile
